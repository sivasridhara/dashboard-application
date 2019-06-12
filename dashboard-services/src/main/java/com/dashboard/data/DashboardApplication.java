package com.dashboard.data;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
public class DashboardApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(DashboardApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(DashboardApplication.class);
        LOGGER.info("=======Started Dashboard Application========");
    }


   /* @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/registration").allowedOrigins("http://localhost:8080");
            }
        };
    }*/

    @Bean
    public WebMvcConfigurer  corsConfigurer(){
       return new WebMvcConfigurerAdapter(){
           @Override
           public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
               configurer.favorPathExtension(false).favorParameter(false).defaultContentType(MediaType.APPLICATION_JSON).
                       mediaType("json",MediaType.APPLICATION_JSON);
           }

            @Override
            public void addCorsMappings(CorsRegistry  corsRegistry){
               corsRegistry.addMapping("/**")
                       .allowedMethods("GET","POST","PUT","DELETE","HEAD");
            }
       };

    }

}
