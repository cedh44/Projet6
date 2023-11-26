package com.openclassrooms.mddapi.repository;

import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {
    List<Subject> findSubjectsByUsersIs(User user);
}
