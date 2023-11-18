package com.openclassrooms.mddapi;

import com.openclassrooms.mddapi.config.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableConfigurationProperties(RsaKeyProperties.class) // Enable configuration properties
@SpringBootApplication
@EnableJpaAuditing //Sert entre autre à mettre la date de création en auto avec l'annotation @CreatedDate dans les models
public class MddApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MddApiApplication.class, args);
	}

}
