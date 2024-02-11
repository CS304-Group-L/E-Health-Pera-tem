package com.example.demo.services;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.reporsitory.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    //register user

    public ResponseEntity<?> registerUser(UserDto userDto){
        Optional<User> existingUser = Optional.ofNullable(userRepo.findByEmail(userDto.getEmail()));
        if(existingUser.isEmpty()){
            User user=new User();

            user.setName(userDto.getName());
            user.setEmail(userDto.getEmail());
            user.setPassword(userDto.getPassword());
            user.setPhoneNumber(userDto.getPhoneNumber());
            user.setNationalId(userDto.getNationalId());
            user.setId(user.getId());

            userRepo.save(user);

            return new ResponseEntity<>("Successfully registed", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("User with given email already exists", HttpStatus.FORBIDDEN);
    }
}

}
