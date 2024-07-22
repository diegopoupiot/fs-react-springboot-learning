package com.diego.spring_boot_library.entity;

import lombok.Data;
import javax.persistence.*;

@Entity
<<<<<<< HEAD
@Table(name = "book")
=======
@Table(name  = "book")
>>>>>>> main
@Data
public class Book {

    @Id
<<<<<<< HEAD
    @GeneratedValue(strategy = GenerationType.IDENTITY)
=======
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
>>>>>>> main
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "copies")
<<<<<<< HEAD
    private Integer copies;

    @Column(name = "copies_available")
    private Integer copiesAvailable;
=======
    private int copies;

    @Column(name = "copies_available")
    private int copiesAvailable;
>>>>>>> main

    @Column(name = "category")
    private String category;

    @Column(name = "img")
<<<<<<< HEAD
    private byte[] img;


}
=======
    private String img;
}
>>>>>>> main
