using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using BlogApi.Services;
using BlogApi.Models;

namespace WebApi.Controllers
{
  // [Authorize]
  [ApiController]
  [Route("api/[controller]")]
  public class BlogsController : ControllerBase
  {
    private BlogContext db;

    public BlogsController(BlogContext _db)
    {
      db = _db;
    }

    [HttpGet]
    public IActionResult Index()
    {
      var blogs = db.Blogs;
      return Ok(blogs);
    }
    

    [HttpGet]
    [Route("getblogs")]
    public IActionResult GetBlogs()
    {
      var blogs = db.Blogs;
      System.Console.Out.Write(blogs);
      return Ok(blogs);
    }
  }
}