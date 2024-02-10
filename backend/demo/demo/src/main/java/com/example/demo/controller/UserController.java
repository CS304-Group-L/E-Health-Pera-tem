package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    //user register
    @PostMapping("userRegister")
    public ResponseEntity<?> register(@RequestBody UserDto userDto){

        return userService.registerUser(userDto);
    }
}
