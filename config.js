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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
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


global.SESSION_ID = process.env.SESSION_ID  || ""  // PUT SUHAIL_19_42_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkNya2UxdGg3V1kzcGFEMlFTbkEwRHZFaWVlVytSQ0VBeHU0MjFWU0ZQd3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA2MzU5MjU2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E4Qjc0MkI2MTJDQjYyRDlBNkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1OTMzMzYzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkh1Q1FwVng5U19xeTFYQXRQQXVLR0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjRkNDMwNTYtYjliOS00MjA4LThmMDMtNDJlOGU4NTM2MDgyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTA4LFxuICAgICAgNzMsXG4gICAgICAxNSxcbiAgICAgIDEyMixcbiAgICAgIDI2LFxuICAgICAgMjE3LFxuICAgICAgMTYsXG4gICAgICA3MSxcbiAgICAgIDIxNCxcbiAgICAgIDE3MyxcbiAgICAgIDIyOCxcbiAgICAgIDE2MSxcbiAgICAgIDUwLFxuICAgICAgMjAzLFxuICAgICAgMTY0LFxuICAgICAgMjE5LFxuICAgICAgNjQsXG4gICAgICAxOTcsXG4gICAgICAyMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTkyLFxuICAgICAgMTE4LFxuICAgICAgMTY3LFxuICAgICAgMjA5LFxuICAgICAgMTQ2LFxuICAgICAgODIsXG4gICAgICAxMTgsXG4gICAgICA1NCxcbiAgICAgIDg4LFxuICAgICAgMjAwLFxuICAgICAgMjQzLFxuICAgICAgOTUsXG4gICAgICAyNTIsXG4gICAgICAxMTksXG4gICAgICAxMzYsXG4gICAgICAxMzMsXG4gICAgICAyMyxcbiAgICAgIDE3NCxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA1NVlYRjYzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDYzNTkyNTYwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJSwqNOWE9cIixcbiAgICBcImxpZFwiOiBcIjE1MzEyODcwMzk0Mjg5ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lHSjdmc1BFS3I3NExzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZXliU21INnpQaFZFdXlLd0M2SVpkdFh5TThaYVRXeHBvSnRiamNSdWxBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxL1Z4Z0Vsb2hVaU5weFVONld3QlZXZmpDZFppckw0SjVUQ0NPV0Z1TEliMFJCZUZTKysvcDdtVGRwNEx3UEZxQkhWSmNkemxhaVZwNnRqTjV0L0tnUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3RXdoZ3FyejFkMDdlMWlQL1QrMXVJU09JZzc4WmJrVDJ5UGdyZ1lsa1dBS0JxRW1UZkZtVVVXRVJ4UmUyN3U4YVpUcno1Y0NYTFFBVGluaXo0RHNBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYzNTkyNTYwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTkzMzM1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURhYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGFiLmpzb24iOiAie1wia2V5RGF0YVwiOlwieFMybmhTRklpbmFmdllySFBDMW5WSTBCcDZTbjZxZWVIZ282cTNoamZNST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjg2MjY4NTQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzU5MzMzNTkzODlcIn0iCn0=your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
