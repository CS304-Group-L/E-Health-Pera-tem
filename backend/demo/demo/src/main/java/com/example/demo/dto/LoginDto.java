package com.example.demo.dto;


import lombok.*;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class LoginDto{
    private String email;
    private String password;

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
