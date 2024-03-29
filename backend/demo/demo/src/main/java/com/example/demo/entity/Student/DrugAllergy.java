package com.example.demo.entity.Student;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "drugAllergy")
public class DrugAllergy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "drugAllergyId")
    private Long drugAllergyId;

    private String allergyDrugsName;

    @ManyToOne
    @JoinColumn(name = "enrolmentNumber")
    private Student student;
}
