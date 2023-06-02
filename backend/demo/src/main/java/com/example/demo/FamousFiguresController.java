package com.example.demo;


import org.springframework.web.bind.annotation.*;

@RestController
public class FamousFiguresController {



    // CREATE
    @PostMapping("/figures");
    // READ
    @GetMapping("/welcome")
    public String welcome(){
        return "Welcome to FamousFigures!";
    }

    @GetMapping("/figures/all");
    @GetMapping("/figures/random");
    @GetMapping("/figures/{id}");
    @GetMapping("/figures/dead");
    @GetMapping("/figures/alive");
    @GetMapping("/figures/male");
    @GetMapping("/figures/female");
    @GetMapping("/figures/catergory");


    // UPDATE
    @PutMapping("/figures/{id}");

    // DELETE
    @DeleteMapping("/figures/{id}");
}
