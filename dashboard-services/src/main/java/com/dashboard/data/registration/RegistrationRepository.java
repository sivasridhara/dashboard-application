package com.dashboard.data.registration;

import com.dashboard.data.registration.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<User,Long>{

    User findByRegistrationId(String registrationId);
}
