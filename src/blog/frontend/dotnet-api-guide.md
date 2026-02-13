---
title: ".NET 8 Web API 从入门到部署实战指南"
date: 2024-06-10
author: 新启年工作室 - 后端组
category: 后端开发 # 关键：将此文归入“后端开发”分类
tags:
  - .NET 8
  - Web API
  - C#
  - 实战教程
  - 部署
description: 本文手把手带你使用最新的 .NET 8 框架，构建一个包含JWT认证、Swagger文档和数据库操作的RESTful API，并最终部署到Linux服务器。
---

## 概述

在当今微服务与前后端分离架构盛行的时代，构建健壮、高效的 Web API 是后端开发者的核心技能。本文将基于最新的 **.NET 8**，演示如何从零开始搭建一个功能完整的 RESTful API。

## 项目初始化

首先，使用 .NET CLI 创建一个新的 Web API 项目：

```bash
dotnet new webapi -n Xinqinian.ExampleApi
cd Xinqinian.ExampleApi
```

这会生成一个包含控制器和基础配置的项目结构。

## 核心功能实现

### 1. 实体与数据库上下文

我们使用 Entity Framework Core (EF Core) 进行数据操作。首先定义实体和数据库上下文。

```csharp
// Models/Product.cs
namespace Xinqinian.ExampleApi.Models;

public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public decimal Price { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
```

### 2. 控制器与增删改查

创建一个基础的 API 控制器，实现对 `Product` 的 RESTful 操作。

```csharp
// Controllers/ProductsController.cs
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ProductsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/products
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
    {
        return await _context.Products.ToListAsync();
    }

    // POST: api/products
    [HttpPost]
    public async Task<ActionResult<Product>> PostProduct(Product product)
    {
        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
    }
}
```

> **最佳实践提示**：在生产环境中，务必使用 **Repository 模式** 或 **CQRS 模式** 将业务逻辑与数据访问层分离，以提升代码的可测试性和可维护性。可以参考我们团队的 [.NET 架构规范](/projects/backend-architecture)。

## 进阶功能

### JWT 身份认证

保护你的 API 是至关重要的。以下是配置 JWT 认证的简化示例：

```csharp
// Program.cs
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"],
            ValidateLifetime = true,
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!)
            ),
            ValidateIssuerSigningKey = true,
        };
    });
```

## 部署到 Linux 服务器

1.  **发布应用**：
    ```bash
    dotnet publish -c Release -o ./publish
    ```
2.  **使用 Nginx 反向代理**：配置 Nginx 将请求转发到 Kestrel 服务器。
3.  **配置为系统服务**：使用 `systemd` 来管理应用的启动、停止和自动重启。

更详细的部署步骤和故障排查，请查阅我们的 [.NET 应用 Linux 部署清单](/blog/backend/dotnet-linux-deployment)。

## 总结与相关资源

通过本文，你了解了构建一个 .NET Web API 的核心流程。掌握这些是成为一名合格后端工程师的基础。

**下一步学习建议**：
*   深入理解 [依赖注入](/tag/依赖注入) 在 .NET 中的工作原理。
*   学习如何使用 [Docker](/tag/Docker) 容器化你的 .NET 应用。
*   探索如何与 [前端 Vue 项目](/category/前端开发) 进行联调。

希望这篇指南能对你有所帮助！如果你在实践过程中遇到问题，欢迎在评论区留言，或查看我们团队整理的 [常见 .NET 问题汇总](/blog/backend/dotnet-faq)。


---

### ✨ 示例文章要点解析：

1.  **分类与标签 (`Frontmatter`)**:
    *   `category: 后端开发` 确保了文章会出现在 **`/category/后端开发/`** 这个分类页面下。
    *   `tags` 提供了更细粒度的主题标记，方便用户通过标签（如 **`/tag/.NET 8/`**）跨分类查找相关内容。

2.  **内容组织**:
    *   遵循了“概述 -> 实践步骤 -> 核心代码 -> 进阶提示 -> 总结”的逻辑，清晰易懂。
    *   包含了**代码高亮**、**内部链接**（如 `[常见 .NET 问题汇总](/blog/backend/dotnet-faq)`）和**外部引用**，增强了文章的实用性和网站的互联性。

3.  **可扩展性**:
    *   文中的内部链接（如指向“部署清单”的链接）为你创建更多相关的后端文章提供了引导，能自然地形成内容网络。

按照这个格式创建文章，它们会自动归入“后端开发”分类，访客可以通过导航栏的“博客分类 -> 后端开发”或直接访问 `/category/后端开发/` 页面查看到所有同类文章。如果需要调整分类页面的显示样式，可以随时告诉我。