using Microsoft.AspNetCore.Mvc;

namespace react_test.Controllers;

[ApiController]
[Route("[controller]")]
public class CanvasController : ControllerBase
{
    private readonly ILogger<CanvasController> _logger;

    public CanvasController(ILogger<CanvasController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Canvas> Get()
    {
        _logger.LogInformation("Canvas was hit");
        return Enumerable.Range(1, 5).Select(idnex => new Canvas
        {
            mainString = "I hope this works"
        }).ToArray();
    }
}
