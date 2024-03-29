package com.example.demo.reporsitory;

import com.example.demo.entity.Doctor.HealthRecords;
import com.example.demo.entity.Doctor.MedicineRecords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface HealthRecordRepo extends JpaRepository<HealthRecords,Long> {
    @Query(value = "SELECT * FROM HEALTH_RECORDS WHERE student_number = ?1", nativeQuery = true)
    List<HealthRecords> getUserById(String studentNumber);
}
