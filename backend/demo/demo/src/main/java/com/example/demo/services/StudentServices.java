package com.example.demo.services;

import com.example.demo.dto.LoginDto;
import com.example.demo.reporsitory.UserRepo;
import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentServices {
    @Autowired
    public PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepo userRepo;

    //Login method
    public LoginResponse loginUser(LoginDto loginDto){
        String message ="";
        User user1= userRepo.findByEmail(loginDto.getEmail());

        if(user1!=null){
            String password=loginDto.getPassword();
            String encodedPassword= user1.getPassword();
            boolean isPWRight = passwordEncoder.matches(password,encodedPassword);

            if(isPWRight){
                Optional<User> user=userRepo.findOneEmailAndPassword(loginDto.getEmail(),encodedPassword);
                if(user.isPresent()){
                    return new LoginResponse("Login success",true);
                }else{
                    return new LoginResponse("Login Faild",false);
                }
            }else{
                return new LoginResponse("Password not match",false);
            }
        }else{
            return new LoginResponse("Email not found",false);
        }
    }
}
