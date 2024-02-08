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


    public ResponseEntity<Object> loginUser(LoginDto loginDto){
        String message ="";
        User user1= userRepo.findByEmail(loginDto.getEmail());

        if(user1!=null){
            String password=loginDto.getPassword();
            String encodedPassword= user1.getPassword();
            boolean isPWRight = passwordEncoder.matches(password,encodedPassword);

            if(isPWRight){
                Optional<User> user=userRepo.findOneEmailAndPassword(loginDto.getEmail(),encodedPassword);
                if(user.isPresent()){
                    return ResponseEntity.ok("Success");
                }else{
                    return ResponseEntity.status(401).body("");
                }
            }else{
                return ResponseEntity.status(401).body("Password Mismatch!");
            }
        }else{
            return ResponseEntity.status(401).body("User Not found!");
        }
    }
}
