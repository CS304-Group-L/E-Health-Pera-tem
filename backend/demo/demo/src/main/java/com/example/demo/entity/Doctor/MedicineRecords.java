package com.example.demo.entity.Doctor;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name ="MedicineRecords")
public class MedicineRecords {
    @Id
    @GeneratedValue
    private Long id;

    private String date;
    private String time;
    private String studentNumber;


    @ElementCollection
    @CollectionTable(name = "medicine_list", joinColumns = @JoinColumn(name = "record_id"))
    @Column(name = "medicine")
    private List<String> medicineList;;
}