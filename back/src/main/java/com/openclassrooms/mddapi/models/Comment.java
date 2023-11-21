package com.openclassrooms.mddapi.models;

import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.Size;

//Pour les commentaires des annotations, cf classe USer
@Entity
@Table(name = "COMMENTS")
@Data
@EntityListeners(AuditingEntityListener.class)
@EqualsAndHashCode(of = {"id"})
@Builder
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@ToString
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Size(max = 2000)
    private String content;

    @OneToOne
    @NonNull
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToOne
    @NonNull
    @JoinColumn(name = "post_id", referencedColumnName = "id")
    private Post post;
}
