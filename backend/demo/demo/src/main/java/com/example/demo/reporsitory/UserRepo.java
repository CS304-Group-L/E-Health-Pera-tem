package com.example.demo.reporsitory;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Long> {
    //find user by email
    User findByEmail(String email);

    //find user by email and password
    @Query("SELECT u FROM User u WHERE u.email = :email AND u.password = :password")
    Optional<User> findOneEmailAndPassword(@Param("email") String email, @Param("password") String password);
}
