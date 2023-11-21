package com.openclassrooms.mddapi.models;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Entity //Correspond à une table de la BDD
@Table(name = "USERS", uniqueConstraints = { //Correspond à la table Users
        @UniqueConstraint(columnNames = "email") //L'email est unique
})
@Data //Génère entre autre les getters et les setters
@EntityListeners(AuditingEntityListener.class) //Audit de l'entity avec AuditingEntityListener par défaut
@EqualsAndHashCode(of = {"id"}) //Génère equals et hashCode sur le champ id
@Builder //Génère une classe interne de type « Builder » capable de construire au moyen de « method chaining » une instance de la classe
@NoArgsConstructor //Génère le constructeur sans argument
@RequiredArgsConstructor //Génère le constructeur avec les arguments requis
@AllArgsConstructor //Génère le constructeur avec tous les arguments
@ToString //Génère toString sur les champs donnés
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull //Indique au Builder que c'est un champ obligatoire
    @Size(max = 255)
    @Email //Type email
    private String email;

    @NonNull
    @Size(max = 255)
    private String name;

    @NonNull
    @Size(max = 255)
    private String password;

}
