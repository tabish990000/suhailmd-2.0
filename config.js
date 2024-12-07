const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/bhaX0XX.jpeg" || "https://i.imgur.com/bhaX0XX.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_50_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY5LFxuICAgICAgICA3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMCxcbiAgICAgICAgODIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNVEgweG9DbitPbjQ4MEQ4YUhtMFQyUkhYbkhpMjVqMlJEWEtqVVYxNnFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzRGRQaDhtZlRQUzZOSG5KeDM3VUVBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUzNGQ3Y2EwLTczNTctNDMwMi05MGFmLTFiMGU0YWRlNDdlZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDM1LFxuICAgICAgOTcsXG4gICAgICAxNjgsXG4gICAgICA3MCxcbiAgICAgIDEzNixcbiAgICAgIDIzNCxcbiAgICAgIDE4OCxcbiAgICAgIDIyNCxcbiAgICAgIDE0OCxcbiAgICAgIDk4LFxuICAgICAgNTAsXG4gICAgICAzMyxcbiAgICAgIDE4MixcbiAgICAgIDEyMixcbiAgICAgIDY4LFxuICAgICAgMTIwLFxuICAgICAgODYsXG4gICAgICAyLFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMzgsXG4gICAgICAyNTUsXG4gICAgICAxNTQsXG4gICAgICA4LFxuICAgICAgNzgsXG4gICAgICAxNjEsXG4gICAgICAxODksXG4gICAgICA1NSxcbiAgICAgIDE3MixcbiAgICAgIDExMixcbiAgICAgIDIzMSxcbiAgICAgIDEzOCxcbiAgICAgIDg2LFxuICAgICAgOTQsXG4gICAgICAxMjQsXG4gICAgICA5MyxcbiAgICAgIDQ2LFxuICAgICAgMjYsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzJFQUtYSFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE5NjMzNTI1MDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCThILqr63wk4apXFxcIiDqr63wnZCF8J2QgPCdkIzwnZCO8J2QlPCdkJIg8J2Qk/CdkIDwnZCB8J2QiPCdkJLwnZCHIPCThqrqr63qr60g4oC56q+twrPwk4aqIFxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4OuXFxu8JODrlxcbvCTg65cXG7wk4ap8JakjfCThqpcIixcbiAgICBcImxpZFwiOiBcIjUzNjEwMzE4NjY3ODQ5OjUzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lQUXo3UUhFUFRKeTdvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwia1N5dkNQd3p5QmxmQXVPN3U1WTVVZjI4VitmQWdpTXpybTVIeEp2V24xdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhRkdud2lxZCthaFl6eFdCQVExS2dSQ252ZGNWdUh3WU9hZ01hVjZTQW83QnBBOWxzajRmd015S21pUFJITHdna2l0RlRGQzBGanFEWmVpbXRyWjhCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPUUVxY3RCM2hjOFZGY0p5YlRFMlM0ak1ub1d4U3NncHNjUUpNVndEbjdVZm5tTnF6VGpsenYvRGwwbUZQcC9ySldNYTIwdSt3SjlDVWRqYjgvbmlBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxOTYzMzUyNTA6NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM0ODU4MTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIY3ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhjdi5qc29uIjogIntcImtleURhdGFcIjpcIlk4SGNCWStsbXRELzlPM1VZclNBanpiaEUyalBTRkJTM1UxS1FnYnNPaFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk4OTQwNDY3NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐓𝐚𝐛𝐢𝐬𝐡",
  packname: process.env.PACK_NAME || "𝐓𝐚𝐛𝐢𝐬𝐡",
  botname : process.env.BOT_NAME  || "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",
  ownername:process.env.OWNER_NAME|| "🅃🄰🄱🄸🅂🄷 🄰🄻🄸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
