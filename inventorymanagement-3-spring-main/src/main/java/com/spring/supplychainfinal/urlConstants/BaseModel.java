package com.spring.supplychainfinal.urlConstants;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;

import org.hibernate.Hibernate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;



import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public abstract class BaseModel implements Serializable{
	
	 private static final long serialVersionUID = 1L;

	 @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
	    private Long id;


	    private Boolean active;

	    @CreatedDate
	    private LocalDateTime createdAt;

	    private Integer createdBy;

	    @LastModifiedDate
	    private LocalDateTime updatedAt;

	    private Integer updatedBy;

	    

	    @Override
	    public boolean equals(Object o) {
	        if (this == o) return true;
	        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
	        BaseModel baseModel = (BaseModel) o;
	        return id != null && Objects.equals(id, baseModel.id);
	    }

	    @Override
	    public int hashCode() {
	        return getClass().hashCode();
	    }

	    
	    
	    
	    
	    
	    
	    
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Boolean getActive() {
			return active;
		}

		public void setActive(Boolean active) {
			this.active = active;
		}

		public LocalDateTime getCreatedAt() {
			return createdAt;
		}

		public void setCreatedAt(LocalDateTime createdAt) {
			this.createdAt = createdAt;
		}

		public Integer getCreatedBy() {
			return createdBy;
		}

		public void setCreatedBy(Integer createdBy) {
			this.createdBy = createdBy;
		}

		public LocalDateTime getUpdatedAt() {
			return updatedAt;
		}

		public void setUpdatedAt(LocalDateTime updatedAt) {
			this.updatedAt = updatedAt;
		}

		public Integer getUpdatedBy() {
			return updatedBy;
		}

		public void setUpdatedBy(Integer updatedBy) {
			this.updatedBy = updatedBy;
		}

		public static long getSerialversionuid() {
			return serialVersionUID;
		}

		
	 
	    
	    
	    
	    
	    
	    
	    
}
