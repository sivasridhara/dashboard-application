package com.dashboard.data.registration.model;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "USER_REGISTRATION")
public class User implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userId")
    @SequenceGenerator(name = "userId", sequenceName = "USER_ID")
    @Column(name = "ID", unique = true, length = 32)
    private Long id;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "EMAIL_ADDRESS")
    private String emailAddress;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "APPOINTMENT")
    private Timestamp appointment;

    @Column(name = "DOB")
    private Date dob;

    @Column(name = "REGISTRATION_ID")
    private String registrationId;


    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getDescription() {
        return description;
    }

    public Timestamp getAppointment() {
        return appointment;
    }

    public Date getDob() {
        return dob;
    }

    public void setRegistrationId(String registrationId) {
        this.registrationId = registrationId;
    }

    public String getRegistrationId() {
        return registrationId;
    }
}
