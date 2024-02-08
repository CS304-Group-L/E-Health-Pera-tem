package com.example.demo.controller;

import com.example.demo.dto.LoginDto;
import com.example.demo.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PutMapping("/LoginUser")
    public ResponseEntity<Object> handleLogin(@RequestBody LoginDto loginDto){
        return loginService.loginUser(loginDto);
    }


}
