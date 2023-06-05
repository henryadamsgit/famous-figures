package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FamousFiguresController {

    @Autowired
    FamousFiguresService famousFiguresService;




    @GetMapping("/figures/ids")
    public List<Long> getFiguresById() {
        return famousFiguresService.getAllIds();
    }
}



//
//    // CREATE
//    @PostMapping("/figures");
//    // READ
//    @GetMapping("/welcome")
//    public String welcome(){
//        return "Welcome to FamousFigures!";
//    }
//
//    @GetMapping("/figures/all");
//    @GetMapping("/figures/random");
//
//
//    @GetMapping("/figures/dead");
//    @GetMapping("/figures/alive");
//    @GetMapping("/figures/male");
//    @GetMapping("/figures/female");
//    @GetMapping("/figures/category");
//
//
//    // UPDATE
//    @PutMapping("/figures/{id}");
//
//    // DELETE
//    @DeleteMapping("/figures/{id}");
//}
