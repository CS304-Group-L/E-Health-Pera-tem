/*package com.example.demo.controller;

import com.example.demo.dto.LoginDto;
import com.example.demo.services.LoginResponse;
import com.example.demo.services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentServices studentServices;

    //student registration

    //user Login
    @PostMapping("login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto){
        LoginResponse loginResponse=studentServices.loginUser(loginDto);
        return ResponseEntity.ok(loginResponse);
    }
}*/
