package com.example.demo.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {
    private String id;
    private String name;
    private String email;
    private String password;
    private String nationalId;
    private String phoneNumber;


}