package com.example.demo.reporsitory;

import com.example.demo.entity.Pharmacy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PharmacyRepo extends JpaRepository<Pharmacy,Long> {


}