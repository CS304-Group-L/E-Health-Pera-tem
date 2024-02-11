package com.example.demo.services;

import com.example.demo.dto.LoginDto;
import com.example.demo.entity.User;
import com.example.demo.reporsitory.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    public PasswordEncoder passwordEncoder;


    public ResponseEntity<Object> loginUser(LoginDto loginDto) {
        User user = userRepo.findByEmail(loginDto.getEmail());

        if (user != null) {
            String password = loginDto.getPassword();
            String encodedPassword = user.getPassword();

            if (password.equals(encodedPassword)) {
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(401).body("Password mismatch");
            }
        } else {
            return ResponseEntity.status(401).body("User not found");
        }
    }
}
