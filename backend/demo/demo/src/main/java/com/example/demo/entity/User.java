package com.example.demo.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name ="user")
public class User {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name="name",nullable = false)
    private String name;

    @Column(name="email",nullable = false)
    private String email;

    @Column(name="password",nullable = false)
    private String password;

    @Column(name="national_id",nullable = false)
    private String nationalId;

    @Column(name="phone_number",nullable = false)
    private String phoneNumber;

    public String getPassword() {
        return password;
    }


//signup constructor

}

