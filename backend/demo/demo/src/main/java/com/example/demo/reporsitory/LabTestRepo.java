package com.example.demo.reporsitory;

import com.example.demo.entity.Doctor.HealthRecords;
import com.example.demo.entity.Doctor.LabTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@EnableJpaRepositories
public interface LabTestRepo extends JpaRepository<LabTest,Long> {
    //get lab test by student number
    @Query(value = "SELECT * FROM LAB TEST WHERE student_number = ?1", nativeQuery = true)
    List<HealthRecords> getUserById(String studentNumber);

    //get lab test done this work with doctor and laboratory
    @Query("SELECT u FROM LabTest u WHERE u.studentNumber = :studentNumber AND u.done = true")
    List<LabTest> findByStudentNumberAndDone(@Param("studentNumber") String studentNumber);


}
