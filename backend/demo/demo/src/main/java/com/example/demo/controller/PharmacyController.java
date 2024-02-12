package com.example.demo.controller;
import com.example.demo.dto.PharmacyDto;
import com.example.demo.services.PharmacyService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/pharmacy")
@CrossOrigin("http://localhost:3000")

public class PharmacyController {
    @Autowired
    private PharmacyService pharmacyService;
    @PostMapping("/savePharmacy")
    public PharmacyDto savePharmacy (@RequestBody PharmacyDto PharmacyDto ) {
        return pharmacyService.savePharmacy(PharmacyDto);
    }

    @DeleteMapping("/{pharmacyId}")
    public ResponseEntity<String> deleteMedicine(@PathVariable Long pharmacyId){
        pharmacyService.deletePharmacy(pharmacyId);
        return ResponseEntity.ok("Medicine deleted successfully");
    }
    @PutMapping("/{pharmacyId}/decrease-quantity")
    public ResponseEntity<String> decreaseQuantity(
            @PathVariable Long pharmacyId,
            @RequestParam("quantityToDecrease") int quantityToDecrease
    ){
        try{
            pharmacyService.decreaseQuantity(pharmacyId,quantityToDecrease);
            return ResponseEntity.ok("Quantity decreased successfully");
        }catch(EntityNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medicine not found");
        }catch(IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Not enough quantity in stock");
        }
    }
}