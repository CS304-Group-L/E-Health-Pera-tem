package com.example.demo.services;

import com.example.demo.dto.PharmacyDto;
import com.example.demo.entity.Pharmacy;
import com.example.demo.reporsitory.PharmacyRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;

@Service
@Transactional
@RequiredArgsConstructor
public class PharmacyService {
    @Autowired
    private PharmacyRepo pharmacyRepo;

//    @Autowired
//    private ModelMap modelMapper;

    public ResponseEntity<Object> addPharmacy(PharmacyDto pharmacyDto){

        Pharmacy pharmacy=new Pharmacy();
        pharmacy.setDrug_name(pharmacyDto.getDrug_name());
        pharmacy.setDrug_brand(pharmacyDto.getDrug_brand());
        pharmacy.setQuantity(pharmacyDto.getQuantity());
        pharmacyRepo.save(pharmacy);
        return ResponseEntity.ok("Add successful");
    }
    
    public void decreaseQuantity(Long pharmacyId,int quantityToDecrease){
        Pharmacy pharmacy = pharmacyRepo.findById(pharmacyId)
                .orElseThrow(() -> new EntityNotFoundException("Medicine not found"));
        int currentQuantity = pharmacy.getQuantity();
        if (currentQuantity < quantityToDecrease){
            throw new IllegalArgumentException("Not Enough quantity in stock");
        }
        pharmacy.setQuantity(currentQuantity - quantityToDecrease);
        pharmacyRepo.save(pharmacy);
    }

    public void deletePharmacy(Long pharmacyId){
        pharmacyRepo.deleteById(pharmacyId);
    }
    public PharmacyDto savePharmacy(PharmacyDto pharmacyDto){


        //return pharmacyRepo.save(PharmacyDto.builder());
        return pharmacyDto;
    }


}