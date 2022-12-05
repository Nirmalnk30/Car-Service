using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Apiproject.Models;

public partial class CarsdbContext : DbContext
{
    public CarsdbContext()
    {
    }

    public CarsdbContext(DbContextOptions<CarsdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Carsdatum> Carsdata { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Carsdatum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__carsdata__3213E83F6820D669");

            entity.ToTable("carsdata");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CarsModel)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Cars_Model");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Mobilenumber)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.ServiceDate)
                .HasMaxLength(40)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("Service_Date");
            entity.Property(e => e.ServicesName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Services_Name");
            entity.Property(e => e.ServicesPrice)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("Services_Price");
            entity.Property(e => e.Username)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
