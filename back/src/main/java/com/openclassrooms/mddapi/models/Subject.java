package com.openclassrooms.mddapi.models;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;

//Pour les commentaires des annotations, cf classe USer
@Entity
@Table(name = "SUBJECTS")
@Data
@EntityListeners(AuditingEntityListener.class)
@EqualsAndHashCode(of = {"id"})
@Builder
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Size(max = 50)
    private String title;

    @Size(max = 2000)
    private String content;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "SUBSCRIPTIONS",
            joinColumns = @JoinColumn(name = "subject_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> users;
}
