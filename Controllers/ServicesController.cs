using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CuddleBunnyPortfolio.Models;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using MimeKit;
using MimeKit.Text;

namespace CuddleBunnyPortfolio.Controllers {
	[Route("api/[controller]")]
    public class ServicesController : Controller {
		private readonly SmtpSettings smtpSettings;

		public ServicesController(IOptions<SmtpSettings> smtpSettings) {
			this.smtpSettings = smtpSettings.Value;
		}

		[HttpPost("email")]
		[ProducesResponseType(200)]
		[ProducesResponseType(400)]
		public async Task<IActionResult> PostEmail([FromBody] EmailViewModel email) {
			Console.WriteLine("############################### PostEmail");

			if(!ModelState.IsValid)
				return BadRequest(ModelState);

			var message = new MimeMessage();
			message.To.Add(new MailboxAddress(smtpSettings.UserEmail));
			message.From.Add(new MailboxAddress(smtpSettings.UserEmail));
			message.Subject = $"[Portfolio][{email.From}] {email.Subject}";
			message.Body = new TextPart(TextFormat.Html) {
				Text = email.Body
			};

			using(var emailClient = new SmtpClient()) {
				emailClient.Connect(smtpSettings.SmtpServer, smtpSettings.SmtpPort, false);
				emailClient.AuthenticationMechanisms.Remove("XOAUTH2");
				await emailClient.AuthenticateAsync(smtpSettings.UserEmail, smtpSettings.UserPassword);
				await emailClient.SendAsync(message);
				emailClient.Disconnect(true);
			}

			return Ok();
		}
    }
}
