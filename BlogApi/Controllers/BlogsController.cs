using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using System.Linq;
using BlogApi.Services;
using BlogApi.Models;

namespace WebApi.Controllers
{
  [Authorize]
  [ApiController]
  [Route("api/[controller]")]
  public class BlogsController : ControllerBase
  {
    private readonly BlogContext db;
    public BlogsController(BlogContext context)
    {
      db = context;
    }
    [HttpGet]
    public ActionResult<IEnumerable<Blog>> Index()
    {
      var blogs = db.Blogs.Include(b => b.User).ToList();

      return new JsonResult(blogs);
    }

    // [HttpGet]
    // [Route("getblogs")]
    // public ActionResult<IEnumerable<Blog>> GetBlogs()
    // {
    //   var blogs = db.Blogs.Include(b => b.User).ToList();
    //   return blogs;
    // }

    [HttpPost("Blog")]
    [Route("add")]
    public ActionResult<Blog> New([FromBody]Blog blog)
    {
      try
      {
        Blog newBlog = blog;
        newBlog.Id = Guid.NewGuid();
        newBlog.User = db.Users.FirstOrDefault(u => u.Id == blog.UserId);
        newBlog.Timestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds();
        db.Blogs.Add(newBlog);
        var result = db.SaveChanges();
        if (result > 0)
        {
          return newBlog;
        }
        else
        {
          return null;
        }
      }
      catch (System.Exception e)
      {
        throw new Exception("Error in adding blog: " + e.Message);
      }
    }

    [HttpPost("Blog")]
    [Route("edit")]
    public ActionResult<Blog> Edit([FromBody]Blog blog)
    {
      try
      {
        var editedBlog = db.Blogs.FirstOrDefault(b => b.Id == blog.Id);
        editedBlog.Text = blog.Text;
        editedBlog.Timestamp = DateTimeOffset.Now.ToUnixTimeMilliseconds();
        db.Blogs.Update(editedBlog);
        var result = db.SaveChanges();
        if (result > 0)
        {
          return editedBlog;
        }
        else
        {
          return null;
        }
      }
      catch (Exception e)
      {
        throw new Exception("Error in editing blog: " + e.Message);
      }
    }
  }
}
