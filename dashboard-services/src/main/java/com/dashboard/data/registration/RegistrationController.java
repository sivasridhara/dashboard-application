package com.dashboard.data.registration;

import com.dashboard.data.registration.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/registration")
public class RegistrationController {

    @Autowired
    private RegistrationService registrationService;

    @PostMapping
    public User createUser(@RequestBody User user) throws Exception{
        String uniqueID = UUID.randomUUID().toString();
        user.setRegistrationId(uniqueID);
         user = registrationService.createUser(user);
        return user;
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable String id) throws Exception{
        User user = registrationService.findUserByRegistrationId(id);
        return user;

    }

}
