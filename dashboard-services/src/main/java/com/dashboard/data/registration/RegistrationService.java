package com.dashboard.data.registration;

import com.dashboard.data.registration.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegistrationService {

    private static final Logger LOGGER = LoggerFactory.getLogger(RegistrationService.class);

    @Autowired
    private RegistrationRepository registrationRepository;

    public User createUser(User user) throws Exception{
        registrationRepository.save(user);
        LOGGER.info("===============================Created User=============================");
       return user;
    }


    public User findUserByRegistrationId(String id){
        return registrationRepository.findByRegistrationId(id);
    }


}
