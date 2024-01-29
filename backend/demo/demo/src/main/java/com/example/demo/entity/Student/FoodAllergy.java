package com.example.demo.entity.Student;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "foodAllergy")
public class FoodAllergy {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "foodAllergyId")
    private Long foodAllergyId;

    private String allergyFoodsName;

    @ManyToOne
    @JoinColumn(name = "enrolmentNumber")
    private Student student;

}