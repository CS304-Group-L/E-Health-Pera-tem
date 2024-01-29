package com.example.demo.reporsitory;

import com.example.demo.entity.Doctor.Medicals;
import com.example.demo.entity.Doctor.MedicineRecords;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface MedicineRecordeRepo extends JpaRepository<MedicineRecords,Long> {

    @Query(value = "SELECT * FROM MEDICINE RECORDS WHERE student_number = ?1", nativeQuery = true)
    List<MedicineRecords> getUserById(String studentNumber);
}
