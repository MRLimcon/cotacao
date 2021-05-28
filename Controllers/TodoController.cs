using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using cotacao.Context;
using cotacao.Models;

namespace cotacao.Controllers
{
    public class TodoController : Controller
    {
        private readonly ApplicationDbContext _applicationDbContext;
        public TodoController(ApplicationDbContext applicationDbContext) 
        {
            _applicationDbContext = applicationDbContext;
        }

        [HttpPost]
        public async Task<ActionResult> Todo([FromBody] Todo todo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }
            var todoAdded = await _applicationDbContext.AddAsync(todo);
            await _applicationDbContext.SaveChangesAsync();
            return Ok();
        }
    }
}