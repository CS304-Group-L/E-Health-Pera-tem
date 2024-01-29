package com.example.demo.reporsitory;

import com.example.demo.entity.Doctor.Medicals;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface MedicalRepo extends JpaRepository<Medicals,Long> {

    @Query(value = "SELECT * FROM MEDICALS WHERE student_number = ?1", nativeQuery = true)
    List<Medicals> getUserById(String studentNumber);
}
