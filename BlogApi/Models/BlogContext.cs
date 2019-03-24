using System;
using Microsoft.EntityFrameworkCore;
using BlogApi.Models;

namespace BlogApi.Models
{
  public class BlogContext : DbContext
  {
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlite("Data Source=blogging.db");
    }

    public DbSet<Blog> Blogs { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<User>().HasMany("Blogs").WithOne("User");

      var user1 = new User { Id = new Guid("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), FirstName = "Test1", LastName = "User1", Username = "test1", Password = "test1" };
      var user2 = new User { Id = new Guid("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), FirstName = "Test2", LastName = "User2", Username = "test2", Password = "test2" };
      var blog1 = new Blog { Id = new Guid("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), Text = "some text 1", User = user1, Timestamp = DateTime.Now };
      var blog2 = new Blog { Id = new Guid("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"), Text = "some text 2", User = user1, Timestamp = DateTime.Now };
      var blog3 = new Blog { Id = new Guid("cccccccccccccccccccccccccccccccc"), Text = "some text 3", User = user2, Timestamp = DateTime.Now };
      var blog4 = new Blog { Id = new Guid("dddddddddddddddddddddddddddddddd"), Text = "some text 4", User = user1, Timestamp = DateTime.Now };
      var blog5 = new Blog { Id = new Guid("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"), Text = "some text 5", User = user2, Timestamp = DateTime.Now };
      var blog6 = new Blog { Id = new Guid("ffffffffffffffffffffffffffffffff"), Text = "some text 6", User = user1, Timestamp = DateTime.Now };
      modelBuilder.Entity<User>().HasData(user1);
      modelBuilder.Entity<User>().HasData(user2);
      modelBuilder.Entity<Blog>().HasData(blog1);
      modelBuilder.Entity<Blog>().HasData(blog2);
      modelBuilder.Entity<Blog>().HasData(blog3);
      modelBuilder.Entity<Blog>().HasData(blog4);
      modelBuilder.Entity<Blog>().HasData(blog5);
      modelBuilder.Entity<Blog>().HasData(blog6);
    }
  }
}
