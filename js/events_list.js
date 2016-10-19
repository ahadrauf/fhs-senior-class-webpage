//Hi future readers! Kudos to you for actually opening the .js file of this website! Enjoy!
//- from The Administrator (read in the same voice as The Terminator)

var tempTime = new Date(); //current time in milliseconds
var timeNow = new Date(tempTime.getFullYear(), tempTime.getMonth(), tempTime.getDate());
//timeNow = new Date(2016, 1, 1);
var date_count = 28; //four weeks
var millisecond_count = (date_count - 1) * 24 * 60 * 60 * 1000; // milliseconds from timeNow to a time date_count days away

var month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


//name = event title, month = 1-12, date = 1-31, year = -9999 - 9999, link = id (must be one word), description = home page summary
//fullDescription = event page description (use <br> for line breaks), moreInfo/moreInfoLink = FHS pages describing the event,
//forms/formsLink = whether there's forms required
//these events have to be in order by date
//            (note: those events without a date should go before those events with a date and should be assigned w/ date: 0)
var events = [
   {
       name: "Walk-Thru Registration Letters A-K", month: 8, date: 17, year: 2015, link: "walk-thru-ak",
       description: "Your assigned walk-thru registration period is determined by the first letter of your last name.<br><br>Schedule: <br>" +
           "E-H &#8212; Noon to 1:30 p.m.<br>" +
           "I-K &#8212; 1:30 p.m. to 3 p.m.<br>" +
           "A-B &#8212; 3 p.m. to 4:30 p.m.<br>" +
           "C-D &#8212; 4:30 p.m. to 6 p.m.",
       fullDescription: "Register for next school year!<br><br>" + 
           "Your assigned walk-thru registration period is determined by the first letter of your last name.<br>Schedule: <br>" +
           "E-H &#8212; Noon to 1:30 p.m.<br>" +
           "I-K &#8212; 1:30 p.m. to 3 p.m.<br>" +
           "A-B &#8212; 3 p.m. to 4:30 p.m.<br>" +
           "C-D &#8212; 4:30 p.m. to 6 p.m.<br><br>" +
           "Seniors, don't forget to sign up for the latest updates about this year's Grad Trip to Disneyland! " + 
           "Sign up <a href='https://springbreakallaccess.webconnex.com/Sign_Up_Sheet' target='_blank'>here</a> " + 
           "to notify the school of your interest in receiving these updates. Parents are also welcome to sign up.<br><br>" + 
           "Want to volunteer for Walk-Thru Registration? Sign up using " + 
           "<a href='http://www.signupgenius.com/go/9040549acae2ca64-foothill2' target='_blank'>this form</a>. " + 
           "Shifts are available from 12 p.m. - 6 p.m.<br><br>" +
           "Complete the online registration process " + 
           "<a href='https://foothill.futurefundapp.com/registration/sessions/new' target='_blank'>here</a>. " + 
           "You should have received your password in a postcard during the first week of August.<br>" +
           "What's required at Walk-Thru Registration:<br><ol><li>Emergency card (from online registration) - completed and signed</li>" +
           "<li>Student/parent signature card (from online registration)</li>" +
           "<li>Your receipt, even if you made no purchases or donations (from online registration)</li>" +
           "<li>TWO proofs of residency</li>" +
           "<li>Proof of a Tdap (pertussis) booster</li>" +
           "<li>Any extra paperwork (e.g. sports packets, district volunteer form)</li></ol>",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/475458",
       formsNumbers: []
   },
   {
       name: "Walk-Thru Registration Letters L-Z", month: 8, date: 18, year: 2015, link: "walk-thru-lz",
       description: "Your assigned walk-thru registration period is determined by the first letter of your last name.<br><br>Schedule: <br>" +
           "S-T &#8212; Noon to 1:30 p.m.<br>" +
           "U-Z &#8212; 1:30 p.m. to 3 p.m.<br>" +
           "L-M &#8212; 3 p.m. to 4:30 p.m.<br>" +
           "N-R &#8212; 4:30 p.m. to 6 p.m.",
       fullDescription: "Register for next school year!<br><br>" + 
           "Your assigned walk-thru registration period is determined by the first letter of your last name.<br>Schedule: <br>" +
           "S-T &#8212; Noon to 1:30 p.m.<br>" +
           "U-Z &#8212; 1:30 p.m. to 3 p.m.<br>" +
           "L-M &#8212; 3 p.m. to 4:30 p.m.<br>" +
           "N-R &#8212; 4:30 p.m. to 6 p.m.<br><br>" +
           "Seniors, don't forget to sign up for the latest updates about this year's Grad Trip to Disneyland! " + 
           "Sign up <a href='https://springbreakallaccess.webconnex.com/Sign_Up_Sheet' target='_blank'>here</a> " + 
           "to notify the school of your interest in receiving these updates. Parents are also welcome to sign up.<br><br>" + 
           "To view the registration steps or to volunteer for Walk-Thru Registration, look at the Walk-Thru info for letters A-K " + 
           "<a href='#walk-thru-ak'>here</a>.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/475458",
       formsNumbers: []
   },
   {
       name: "Back to school!", month: 8, date: 25, year: 2015, link: "back-to-school",
       description: "The deadline for schedule change forms is two weeks after school starts.",
       fullDescription: "The deadline for schedule change forms is two weeks after school starts.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Senior Picnic Ticket Sales Begin", month: 8, date: 27, year: 2015, link: "senior-picnic-ticket-sales-begin",
       description: "Prices:<br>" + 
           "Thursday, 8/27 - Monday, 8/31 &#8212; $55 with ASB, $60 without ASB<br>" + 
           "Tuesday, 9/1 - Thursday, 9/3 &#8212; $60 with ASB, $65 without ASB<br>",
       fullDescription: "Tickets for the senior picnic will be sold at the front office before and after school and during lunch.<br>" + 
           "For more information about " + 
           "the senior picnic, scroll down to the Senior Picnic event description or just click <a href='#senior-picnic'>here</a>.<br><br>" + 
           "Prices:<br>" + 
           "Thursday, 8/27 - Monday, 8/31 &#8212; $55 with ASB, $60 without ASB<br>" + 
           "Tuesday, 9/1 - Thursday, 9/3 &#8212; $60 with ASB, $65 without ASB<br>",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Personal Statement Workshop", month: 9, date: 1, year: 2015, link: "personal-statement-workshop",
       description: "Learn more about what colleges are looking for in their application essays!",
       fullDescription: "This workshop will teach students what colleges are looking for in their application essays and " + 
           "how to write a winning essay.<br><br>" + 
           "The workshop will take place in C-6 on Tuesday, 9/1 from 6:30 p.m. - 7:30 p.m.<br><br>" +
           "The price of the workshop is $25 per student. All proceeds will go towards PTSA.<br><br>" + 
           "Complete form 1 in the Forms section. Completed forms and payment should be turned in to the counseling office.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/486555",
       formsNumbers: [1]
   },
   {
       name: "Welcome Back Dance", month: 9, date: 4, year: 2015, link: "welcome-back-dance",
       description: "Location: Large Gym<br>" + 
           "Date/Time: Friday 9/4, 7 p.m. - 10 p.m.<br><br>" +
           "Tickets will be sold in the quad area during lunch from Monday, 8/31 - Thursday, 9/3. Tickets will not be sold on Friday, 9/4, " + 
           "or at the dance.<br>" + 
           "Prices: $5 with ASB, $10 without ASB",
       fullDescription: "Location: Large Gym<br>" + 
           "Date/Time: Friday 9/4, 7 p.m. - 10 p.m.<br><br>" + 
           "The dance's theme will be sports jerseys. All outfits must adhere to the regular Foothill dress code.<br><br>" + 
           "Tickets will be sold in the quad area during lunch from Monday, 8/31 - Thursday, 9/3. Tickets will not be sold on Friday, 9/4, " + 
           "or at the dance.<br>" + 
           "Prices: $5 with ASB, $10 without ASB<br><br>" + 
           "Please read the Dance Behavior Agreement (form 2) and fill out the Dance Agreement Form (form 3)",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/486123",
       formsNumbers: [2, 3]
   },
   {
       name: "Senior Picnic", month: 9, date: 9, year: 2015, link: "senior-picnic",
       description: "The picnic will be at Waterworld in Concord.",
       fullDescription: "Fun in the sun! The picnic will be at Waterworld in Concord.<br><br>" + 
           "Schedule:<br>" + 
           "7a.m. &#8212; Breakfast in the multipurpose room. Breakfast will be complimentary for all seniors.<br>" +
           "8a.m. &#8212; Boarding for the buses will begin at Foothill. All students must ride in a bus. " + 
           "No private vehicles will be allowed.<br>" +
           "8:45a.m. &#8212; Expected departure time for the buses.<br>" +
           "3.15p.m. &#8212; Students will return to Foothill in their buses.<br><br>" +
           "Tickets for the senior picnic will be sold at the front office before and after school and during lunch.<br>" + 
           "Prices:<br>" + 
           "Thursday, 8/27 - Monday, 8/31 &#8212; $55 with ASB, $60 without ASB<br>" + 
           "Tuesday, 9/1 - Thursday, 9/3 &#8212; $60 with ASB, $65 without ASB<br><br>" + 
           "Students who do not participate in the senior picnic will be required to attend classes as usual that day.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/486124",
       formsNumbers: []
   },
   {
       name: "Back to School Night", month: 9, date: 16, year: 2015, link: "back-to-school-night",
       description: "Parents can meet their child's teachers and get in touch with other parents.<br><br>" + 
           "A rally for the parents will be held in the large gym at 6:15 p.m. Classroom visits will run from 7 p.m. to 9 p.m.",
       fullDescription: "Parents can meet their child's teachers and get in touch with other parents.<br><br>" + 
           "Schedule:<br>" + 
           "6:15 p.m. &#8212; A rally for the parents will be held in the large gym.<br>" + 
           "7:00 p.m. to 7:12 p.m. &#8212; Period 1<br>" +
           "7:18 p.m. to 7:30 p.m. &#8212; Period 2<br>" +
           "7:36 p.m. to 7:48 p.m. &#8212; Period 3<br>" +
           "7:54 p.m. to 8:06 p.m. &#8212; Period 4<br>" +
           "8:12 p.m. to 8:24 p.m. &#8212; Period 5<br>" +
           "8:30 p.m. to 8:42 p.m. &#8212; Period 6<br>" + 
           "8:48 p.m. to 9:00 p.m. &#8212; Period A/B<br><br>" + 
           "Please follow your child's schedule in order. Click " + 
           "<a href='http://www.foothillfalcons.org/about_us/fhs_map.jsp' target='_blank'>here</a> " + 
           "for the campus map.<br><br>" +
           "The schedule at Back to School Night is extremely tight. For detailed questions or concerns, please email the teacher to " + 
           "schedule an individual meeting with " + 
           "the teacher. Teacher email forms can be found " + 
           "<a href='http://www.foothillfalcons.org/apps/staff/?rn=6852900' target='_blank'>here</a>.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/148188",
       formsNumbers: []
   },
   {
       name: "Homecoming Ticket Sales start", month: 9, date: 29, year: 2015, link: "homecoming-ticket-sales-start",
       description: "Students must fill out the dance forms before purchasing their tickets " + 
           "(see the Forms page to download these forms).<br><br>" + 
           "Ticket prices:<br>" + 
           "Tuesday, 9/29 - Thursday, 10/2 &#8212; $15 with an ASB sticker and $20 without ASB<br>" + 
           "Monday, 10/5 - Wednesday, 10/7 &#8212; $20 with ASB sticker and $25 without ASB<br>" + 
           "Late tickets &#8212; $30. No tickets will be sold at the door.",
       fullDescription: "Tickets will be sold before/after school and during lunch at the front office. " + 
           "Students must fill out the dance forms before purchasing their tickets (see the Forms page to download these forms).<br><br>" + 
           "Ticket prices:<br>" + 
           "Tuesday, 9/29 - Thursday, 10/2 &#8212; $15 with an ASB sticker and $20 without ASB<br>" + 
           "Monday, 10/5 - Wednesday, 10/7 &#8212; $20 with ASB sticker and $25 without ASB<br>" + 
           "Late tickets &#8212; $30. No tickets will be sold at the door.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/268178",
       formsNumbers: [2, 3]
   },
   {
       name: "Seniors get cap/gown/announcement order packets", month: 10, date: 0, year: 2015, link: "cap-gown-order-packets",
       description: "Order packets will be distributed in the quad at lunch.",
       fullDescription: "Order packets will be distributed in the quad at lunch.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Homecoming Skits", month: 10, date: 7, year: 2015, link: "homecoming-skits",
       description: "Come see the class skits this evening!<br><br>" +
           "Location: Alameda County Fairgrounds amphitheater<br>" +
           "Time: 7 p.m.<br><br>" + 
           "Tickets will be sold at lunch from 10/5 to 10/7. Tickets are $5 with an ASB sticker and $7 without ASB. " + 
           "Any remaining tickets will be sold at the door for $7.",
       fullDescription: "Come see the class skits this evening! The theme for the skits is Back to Reality.<br><br>" +
           "Location: Alameda County Fairgrounds amphitheater<br>" +
           "Time: 7 p.m.<br><br>" +
           "Tickets will be sold at lunch from 10/5 to 10/7. Tickets are $5 with an ASB sticker and $7 without ASB. " +
           "Any remaining tickets will be sold at the door for $7. There is no parking fee at the amphitheater for this event.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/268178",
       formsNumbers: []
   },
   {
       name: "Homecoming Dance", month: 10, date: 10, year: 2015, link: "homecoming-dance",
       description: "Location: Large gym<br>Time: 7 p.m. - 10 p.m.",
       fullDescription: "Location: Large gym<br>Time: 7 p.m. - 10 p.m.<br><br>" +
           "Tickets will be sold before/after school and during lunch at the front office. " + 
           "Students must fill out the dance forms before purchasing their tickets (see the Forms page to download these forms).<br>" + 
           "Ticket prices:<br>" + 
           "Tuesday, 9/29 - Thursday, 10/2 &#8212; $15 with an ASB sticker and $20 without ASB<br>" + 
           "Monday, 10/5 - Wednesday, 10/7 &#8212; $20 with ASB sticker and $25 without ASB<br>" + 
           "Late tickets &#8212; $30. No tickets will be sold at the door.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/268178",
       formsNumbers: [2, 3]
   },
   {
       name: "Senior Yearbook Ads Early Submission", month: 10, date: 18, year: 2015, link: "senior-yearbook-ads-early-submission",
       description: "Dedicate a personalized quarter-page to a graduating senior in the Foothill 2015-16 Yearbook!<br><br>" + 
           "Submissions by this deadline cost $90. After this date until the final deadline, Nov. 1, submissions will cost $110. " + 
           "Students are limited to a maximum of two ads each.",
       fullDescription: "Dedicate a personalized quarter-page to a graduating senior in the Foothill 2015-16 Yearbook!<br><br>" + 
           "Submissions by this deadline cost $90. After this date until the final deadline, Nov. 1, submissions will cost $110. " + 
           "Students are limited to a maximum of two ads each.<br><br>" + 
           "Ads can be created using various softwares, such as Photoshop or InDesign. Instructions for how to submit your ads can be found " + 
           "<a href='https://d2ct263enury6r.cloudfront.net/Aci7TpYwOA3CZXFhaD3Lw4irKOsoh2ESdPQSeYXIIki1Pfi1.pdf' target='_blank'>here</a>.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=197113",
       formsNumbers: []
   },
   {
       name: "College Application Lab", month: 10, date: 27, year: 2015, link: "college-app-lab-10/27",
       description: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 3rd period and 2:47-3:47",
       fullDescription: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 3rd period and 2:47-3:47<br><br>" +
           "If you are going during the school day, you must turn in a signed permission slip from your teacher for that period.<br><br>" +
           "If you cannot attend this lab, more will be offered on November 3, November 10, and November 16.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/506463",
       formsNumbers: []
   },
   {
       name: "Cap/gown/announcement orders due", month: 10, date: 30, year: 2015, link: "cap-gown-orders-due",
       description: "Turn in your order forms for your senior caps/gowns, graduation announcements and senior rings by this date." + 
           "The orders will be collected in the quad area at lunch time on Thursday, 10/29 and Friday, 10/30.",
       fullDescription: "Turn in your order forms for your senior caps/gowns, graduation announcements, and senior rings by this date. " +
           "You will receive the order forms in your economics or civics class. " + 
           "The orders will be collected in the quad area at lunch time on Thursday, 10/29 and Friday, 10/30.<br><br>" + 
           "You can always order your graduation materials online at <a href='http://www.jostens.com/apps/store/customer/1006185/Foothill-High-School/' target='_blank'>here</a>.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/507354",
       formsNumbers: []
   },
   {
       name: "Cal Grant Opt-Out Deadline", month: 10, date: 30, year: 2015, link: "cal-grant-opt-out-deadline",
       description: "High schools submit senior GPA to the state so students can be considered for college grant money (Cal Grants).<br><br>" + 
           "To opt out of this process, you must submit either of the two forms below.",
       fullDescription: "High schools submit senior GPA to the state so students can be considered for college grant money (Cal Grants).<br><br>" + 
           "To opt out of this process, you must submit either of the two forms below. " + 
           "Students who don't submit this form will have their GPA automatically sent for Cal Grant consideration.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/503779",
       formsNumbers: [4, 5]
   },
   {
       name: "Makeup cap/gown/announcement orders", month: 11, date: 6, year: 2015, link: "makeup-cap-gown-orders-due",
       description: "The orders will be collected in the quad area at lunch time.",
       fullDescription: "The orders will be collected in the quad area at lunch time.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Deadline for senior yearbook ads", month: 11, date: 1, year: 2015, link: "senior-yearbook-ad-deadline",
       description: "Dedicate a personalized quarter-page to a graduating senior in the Foothill 2015-16 Yearbook!<br>" +
           "Submissions will cost $110. Students are limited to a maximum of two ads each.",
       fullDescription: "Dedicate a personalized quarter-page to a graduating senior in the Foothill 2015-16 Yearbook!<br><br>" +
           "Submissions by this deadline cost $90. After this date until the final deadline, Nov. 1, submissions will cost $110. " +
           "Students are limited to a maximum of two ads each.<br><br>" +
           "Ads can be created using various softwares, such as Photoshop or InDesign. Instructions for how to submit your ads can be found " +
           "<a href='https://d2ct263enury6r.cloudfront.net/Aci7TpYwOA3CZXFhaD3Lw4irKOsoh2ESdPQSeYXIIki1Pfi1.pdf' target='_blank'>here</a>.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=197113",
       formsNumbers: []
   },
   {
       name: "College Application Lab", month: 11, date: 3, year: 2015, link: "college-app-lab-10/27",
       description: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 2:47-3:47",
       fullDescription: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 2:47-3:47<br><br>" +
           "If you cannot attend this lab, more will be offered on November 10 and November 16.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/506463",
       formsNumbers: []
   },
   {
       name: "College Application Lab", month: 11, date: 10, year: 2015, link: "college-app-lab-10/27",
       description: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 4th period and 2:47-3:47",
       fullDescription: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 4th period and 2:47-3:47<br><br>" +
           "If you are going during the school day, you must turn in a signed permission slip from your teacher for that period.<br><br>" +
           "If you cannot attend this lab, another one will be offered on November 16.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/506463",
       formsNumbers: []
   },
   {
       name: "Deadline for Senior Yearbook Photos", month: 11, date: 15, year: 2015, link: "senior-yearbook-photos-deadline",
       description: "",
       fullDescription: "Foothill's official photography company for its yearbook photos is Studio One Photography in Dublin.<br>" +
           "You may schedule senior photo appointments by contacting Studio One Photography at (925) 361-0430. " +
           "All appointments must be made by phone. There is currently no online scheduling.<br><br>" +
           "Click <a href='http://studio1experience.com/' target='_blank'>here</a> to visit the Studio One website.<br><br>" +
           "All senior yearbook photos must be taken by Studio One Photography. " +
           "Extra fees apply for extra poses and photo orders. Click " +
           "<a href='http://studio1experience.com/senior-appointment-info' target='_blank'>here</a> for more info " +
           "on these prices.<br><br> The specific deadline date and other info will be available soon!",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?type=d&uREC_ID=45121&pREC_ID=471133",
       formsNumbers: []
   },
   {
       name: "College Application Lab", month: 11, date: 16, year: 2015, link: "college-app-lab-10/27",
       description: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 2:47-3:47",
       fullDescription: "This lab, offered by the Foothill Counseling Department, will give helpful information about the college application process.<br><br>" +
           "Location: B-1<br>Time: 2:47-3:47<br><br>" +
           "If you are going during the school day, you must turn in a signed permission slip from your teacher for that period.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/506463",
       formsNumbers: []
   },
   {
       name: "Deadline for Senior Yearbook Quotes", month: 12, date: 18, year: 2015, link: "senior-yearbook-quotes-deadline",
       description: "Turn in your senior yearbook quotes " + 
           "<a href='https://docs.google.com/forms/d/1ObdKTEuw8Hsmpj8pS7kIuMRisTnURBsMNnst1FuMVvM/viewform?edit_requested=true' target='_blank'>here</a>.",
       fullDescription: "Turn in your senior yearbook quotes " + 
           "<a href='https://docs.google.com/forms/d/1ObdKTEuw8Hsmpj8pS7kIuMRisTnURBsMNnst1FuMVvM/viewform?edit_requested=true' target='_blank'>here</a>.<br><br>" + 
           "Quotes are limited to 160 characters, including the source for outside quotes.<br><br>" + 
           "You only have one chance to submit a senior quote, so take care in choosing. Please keep your quotes school-appropriate.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Grad Nite Deposit Deadline", month: 12, date: 1, year: 2015, link: "grad-nite-deposit-deadline",
       description: "A minimum $50 deposit must be turned into the front office by this date to guarantee your spot on the Grad Nite field trip. Deposits will " + 
           "be turned into a box labeled 'Grad Nite' in the student services area.",
       fullDescription: "A minimum $50 deposit must be turned into the front office by this date to guarantee your spot on the Grad Nite field trip. Deposits will " + 
           "be turned into a box labeled 'Grad Nite' in the student services area. <br><br>The Grad Nite form (link can be found below) isn't due until March 20; only the " + 
           "deposit is due by December 1st.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?type=d&uREC_ID=45121&pREC_ID=654725",
       formsNumbers: [6]
   },
   {
       name: "Grad Nite & Senior Events Informational Meeting", month: 12, date: 9, year: 2015, link: "grad-nite-senior-events-informational-meeting",
       description: "Time: 7 pm - 8:30 pm<br>Location: Library<br><br>This is an informational meeting about Grad Nite and other upcoming senior events.",
       fullDescription: "Time: 7 pm - 8:30 pm<br>Location: Library<br><br>This is an informational meeting about Grad Nite and other upcoming senior events.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "College Financial Aid Night", month: 1, date: 7, year: 2016, link: "college-financial-aid-night",
       description: "Date/Time: 7:00 pm - 8:30 pm<br>Location: Amador Valley High School MPR<br>This is an information meeting about college financial aid " + 
           "opportunities and the Free Application for Federal Student Aid (FAFSA). Both students and parents are welcome.",
       fullDescription: "Date/Time: 7:00 pm - 8:30 pm<br>Location: Amador Valley High School MPR<br>This is an information meeting about college financial aid " + 
           "opportunities and the Free Application for Federal Student Aid (FAFSA). A representative from St. Mary's College in Moraga will also present on the FAFSA. " + 
           "Both students and parents are welcome.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/events/2016/1/7/2531941/?id=0",
       formsNumbers: []
   },
   {
       name: "Senior Favorites Deadline", month: 1, date: 15, year: 2016, link: "senior-favorites-deadline",
       description: "Select your choices for this year's senior favorites " + 
           "<a href='https://docs.google.com/forms/d/1yVoZAcUwKvyti-Iw4vh21L2zPFU-vhEDVjju0eYhLoU/viewform?c=0&w=1' target='_blank'>here</a>.",
       fullDescription: "Select your choices for this year's senior favorites " + 
           "<a href='https://docs.google.com/forms/d/1yVoZAcUwKvyti-Iw4vh21L2zPFU-vhEDVjju0eYhLoU/viewform?c=0&w=1' target='_blank'>here</a>.<br>" + 
           "CAUTION: You'll only be able to submit your selections once. You cannot revise your picks after submitting the form.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/news/article/434048",
       formsNumbers: []
   },
   {
       name: "Senior Panoramic", month: 1, date: 27, year: 2016, link: "senior-panoramic",
       description: "Time: 8 AM - 8:30 AM<br>Where: Outdoor quad<br><br>Meet up before school to take the senior class yearbook photo.",
       fullDescription: "Time: 8 AM - 8:30 AM<br>Where: Outdoor quad<br><br>Meet up before school to take the senior class yearbook photo.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Pick up Grad Announcements", month: 2, date: 0, year: 2016, link: "grad-announcements-pickup",
       description: "You can pick up the grad announcements in the outer quad at lunch.",
       fullDescription: "You can pick up the grad announcements in the outer quad at lunch.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Grad Nite and Senior Events Meeting", month: 2, date: 9, year: 2016, link: "grand-nite-senior-events-meeting",
       description: "Time: 7:00 pm - 8:00 pm<br>Location: Foothill Library<br><br>This meeting will give information about the senior Grad Nite trip and other senior events.",
       fullDescription: "Time: 7:00 pm - 8:00 pm<br>Location: Foothill Library<br><br>This meeting will give information about the senior Grad Nite trip and other senior events.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/events/2016/2/9/2581280/?REC_ID=2581280&id=0",
       formsNumbers: []
   },
   {
       name: "Baccalaureate Auditions", month: 4, date: 20, year: 2016, link: "baccalaureate-auditions",
       description: "Seniors who want to read a special song, poem, or reading to graduating students must audition at choir teacher Brooke Wallace's room, D-1, " + 
           "from May 20-21." +
           "Performers will need to be available to rehearse on Friday, 6/3, at 4 PM and must arrive at the 6/5 event no later than 12:45 PM.<br><br>" + 
           "For more information about the baccalaureate event, read the event info <a href='#baccalaureate-ceremony'>here</a>.",
       fullDescription: "Seniors who want to read a special song, poem, or reading to graduating students must audition at choir teacher Brooke Wallace's room, D-1, " + 
           "from May 20-21. " +
           "Performers will need to be available to rehearse on Friday, 6/3, at 4 PM and must arrive at the 6/5 event no later than 12:45 PM.<br><br>" +
           "For music questions, email or ask Mr. Wallace. For other questions, please email either Donna Truex (donnamtruex@gmail.com) or Cathy Widas (c.widas@comcast.net). " + 
           "<br><br>For more information about the baccalaureate event, read the event info <a href='#baccalaureate-ceremony'>here</a>.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Grad Night Payments Due", month: 4, date: 29, year: 2016, link: "grad-night-payment-due",
       description: "Turn in your Disneyland Grad Night payments in the front office by this date.",
       fullDescription: "Turn in your Disneyland Grad Night payments in the front office by this date.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Graduation Ribbon Leis Order Form Deadline", month: 4, date: 30, year: 2016, link: "graduation-ribbon-leis-deadline",
       description: "Order a handmade ribbon lei for your graduation <a href='http://ribbonleis.jimdo.com/'>here</a>.",
       fullDescription: "Order a handmade ribbon lei for your graduation! Leis come in the Foothill colors of blue and yellow.<br><br>" + 
           "Steps to order lei:<br>" + 
           "<ol><li>Visit <a href='http://ribbonleis.jimdo.com/' target='_blank'>this website</a> " + 
           "to view the different styles and colors of leis. " +
           "Once you've decided on your lei, follow the directions under the 'Ordering Instruction' link.</li>" + 
           "<li>You will get an email confirmation detailing the price and how to pay for the lei. " +
           "Prices vary based on the lei style and accessories you choose.</li>" + 
           "<li>Pay for your ribbon lei in the Foothill High School office.</li></ol>",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?type=d&uREC_ID=45121&pREC_ID=112612",
       formsNumbers: []
   },
   {
       name: "Deadline to Submit Baccalaureate Photos", month: 5, date: 1, year: 2016, link: "baccalaureate-photos-deadline",
       description: "During the baccalaureate ceremony, students can sign up to have their photos displayed in a slideshow presentation. To participate, submit your " + 
           "baccalaureate kindergarden pictures in a .jpg format to fhsbacc2016@gmail.com!",
       fullDescription: "During the baccalaureate ceremony, students can sign up to have their photos displayed in a slideshow presentation. Every slide will have " + 
           "the student's name, their senior picture from Studio1 Photography, and a kindergarden picture that students submit online. Email photos in a .jpg format " + 
           "to fhsbacc2016@gmail.com.<br><br>" + 
           "Photos should be between the sizes of 2x3 and 8x10 and should be a headshot. Make sure to include the student's name and ID number in the email subject.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57255",
       formsNumbers: []
   },
   {
       name: "Pick Up Caps/Gowns Today ONLY", month: 5, date: 3, year: 2016, link: "cap-gown-pickup",
       description: "Make sure you pick up your caps and gowns today for the graduation ceremony!",
       fullDescription: "Make sure you pick up your caps and gowns today for the graduation ceremony!",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Senior Memory Collages Due (optional)", month: 5, date: 6, year: 2016, link: "senior-memory-collage-deadline",
       description: "Students can submit a collage that will be displayed during the after-the-ball breakfast on May 15.",
       fullDescription: "Students can submit a collage to the office that will be displayed during the after-the-ball breakfast on May 15.<br><br>" + 
           "An informational meeting on how to make collages will be held on Wednesday, April 4 at 7 pm in room C-4.<br><br>" + 
           "The following restrictions must be observed in turning in collages: " + 
           "<ol><li>You must use heavier than normal-weight paper (like poster board) in blue, white or gold colors.</li>" + 
           "<li>The paper must be 11x14 inches in size.</li>" + 
           "<li>Use a variety of photos from birth to senior year.<li>" + 
           "<li>Photos should be secured using two-sided tape or photo glue. Photos may be laid out horizontally or vertically. Other materials, like stickers, " + 
           "scrapbooking items, captions or colored paper are also acceptable.</li>" + 
           "<li>There must be a 1/4- to 1/2-inch border around the entire memory board.</li>" + 
           "<li>Get one full-sized color copy of your original collage. You may keep your original. You MUST fully laminate this copy.</li>" + 
           "<li>Put student's name, phone number and ID number on back of photocopy collage.</li>",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57254",
       formsNumbers: []
   },
   {
       name: "Sign Up For Teacher/Staff to Give Your Diploma", month: 5, date: 6, year: 2016, link: "teacher-diploma-signup",
       description: "Sign up in the front office for your favorite teacher/staff members to give you your diploma.",
       fullDescription: "Sign up in the front office for your favorite teacher/staff members to give you your diploma.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Senior Ball", month: 5, date: 14, year: 2016, link: "senior-ball",
       description: "Attend the last major senior dance of the year! The dance will be held in San Francisco City Hall from 7 - 11 PM. Students are also invited " + 
           "to attend the after-the-ball breakfast when they return from the venue.",
       fullDescription: "Attend the last major senior dance of the year! The dance will be held in San Francisco City Hall from 7 - 11 PM. Students are also invited " +
           "to attend the after-the-ball breakfast when they return from the venue.<br><br>" + 
           "Ticket prices: <br>" +
           "<ol><li>May 4-6 -- $115 with ASB sticker and $120 without ASB sticker</li>" + 
           "<li>May 9-11 -- $120 with ASB sticker and $125 without ASB sticker</li>" + 
           "<li>Late tickets -- $140 with or without ASB sticker</li></ol>" + 
           "Bus signups for senior ball can be done <a href='https://docs.google.com/forms/d/1RMxNwclIt5nr4tOS_ScnWDJ_Wpsor-EQoB1oQNiLJBM/viewform?c=0&w=1'>here</a>.<br><br>" + 
           "Senior ball is a formal event, and dress code should match this description. For more clarification on dress code, check out " + 
           "<a href='http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57248'>this website</a> for more details.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57248",
       formsNumbers: [2, 10]
   },
   {
       name: "After-the-ball Breakfast", month: 5, date: 15, year: 2016, link: "after-ball-breakfast",
       description: "Location: MPR<br>Time: 12:30 AM - 2:30 AM<br><br>Enjoy a early morning breakfast after ball! Admission is free for students.",
       fullDescription: "Location: MPR<br>Time: 12:30 AM - 2:30 AM<br><br>Enjoy a early morning breakfast after ball! Admission is free for students.<br><br>" + 
           "This breakfast is paid for by senior ball funds. Donations are greatly appreciated. Please make checks out to FHS Grad Nite and write Ball Breakfast " + 
           "in the memo section. Deposit checks in the office.<br><br>" + 
           "Due to the large scale of this event, volunteers are required to make it a success. Shifts begin at 9:30 PM on 3/14 and continue until 3:30 on 3/15. To sign up, " + 
           "please email these people: (to be uploaded later).",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?type=d&uREC_ID=45121&pREC_ID=57249",
       formsNumbers: []
   },
   {
       name: "Senior Yearbooks", month: 6, date: 1, year: 2016, link: "senior-yearbooks",
       description: "You'll get your senior yearbooks in your English class.",
       fullDescription: "You'll get your senior yearbooks in your English class.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Senior Scholarships Awards Breakfast", month: 6, date: 1, year: 2016, link: "senior-scholarships-awards-breakfast",
       description: "Time: 7:30 - 9:00 AM<br><br>This breakfast will celebrate the achievements of graduating seniors who were granted scholarships by their future " + 
           "colleges and universities.",
       fullDescription: "Time: 7:30 - 9:00 AM<br><br>This breakfast will celebrate the achievements of graduating seniors who were granted scholarships by their future " +
           "colleges and universities.<br><br>Students who submitted their scholarship information on " + 
           "<a href='https://docs.google.com/forms/d/1rt1QB3tL64TIsoo_CUREFTqfjnz0RP0VBOb9ZEp5m-I/viewform'>this Google form</a> will be invited to attend this breakfast.",
       moreInfoLink: "",
       formsNumbers: []
   },
   {
       name: "Baccalaureate Ceremony", month: 6, date: 5, year: 2016, link: "baccalaureate-ceremony",
       description: "Location: Valley Community Church, 4455 Del Valle Parkway, Pleasanton<br>Time: 2 PM (seniors must arrive no later than 1:15 PM)<br><br>" + 
           "Seniors and their families are invited to attend baccalaureate, a non-denominational, inspirational, and <em>voluntary</em> senior celebration of graduation. " + 
           "No tickets are required to attend.<br><br>" + 
           "The event will feature performances by students, advice from teachers and former students, and a final slideshow presentation on leaving high school.<br><br>" + 
           "To learn how to audition for the event, read the audition information <a href='#baccalaureate-auditions'>here</a>.",
       fullDescription: "Location: Valley Community Church, 4455 Del Valle Parkway, Pleasanton<br>Time: 2 PM (seniors must arrive no later than 1:15 PM)<br><br>" +
           "Seniors and their families are invited to attend baccalaureate, a non-denominational, inspirational, and <em>voluntary</em> senior celebration of graduation." +
           "No tickets are required to attend.<br><br>" +
           "The event will feature performances by students, advice from teachers and former students, and a final slideshow presentation on leaving high school.<br><br>" + 
           "To learn how to audition for the event, read the audition information <a href='#baccalaureate-auditions'>here</a>.<br><br>" +
           "For music questions, email or ask Mr. Wallace. For other questions, please email either Donna Truex (donnamtruex@gmail.com) or Cathy Widas (c.widas@comcast.net).",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?type=d&uREC_ID=45121&pREC_ID=57250",
       formsNumbers: []
   },
   {
       name: "Mandatory Graduation Practice", month: 6, date: 8, year: 2016, link: "graduation-practice",
       description: "All graduating seniors and approved speakers who want to attend the graduation ceremony must attend this practice session.<br><br>" + 
           "The practice will take place from 12:30 PM - 2:30 PM.",
       fullDescription: "All graduating seniors and approved speakers who want to attend the graduation ceremony must attend this practice session.<br><br>" +
           "The practice will take place from 12:30 PM - 2:30 PM. Speakers only need to attend from 2:30 PM - 3:00 PM.<br><br>" + 
           "To get permission to skip the graduation practice, you must get prior approval from VP Jennifer Friesen.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57301",
       formsNumbers: []
   },
   {
       name: "Graduation Ceremony", month: 6, date: 10, year: 2016, link: "graduation-ceremony",
       description: "It's time to graduate! Graduating seniors should report to the softball field b 5 PM.",
       fullDescription: "It's time to graduate! Graduating seniors should report to the softball field b 5 PM.<br><br>" + 
           "Students will get 6 tickets to graduation during school hours Friday, June 10. There will be NO extra tickets available, so if you want to bring" + 
           "more guests you will need to negotiate with other students to obtain their tickets.<br><br>" + 
           "Although wearing the items provided in the cap/gown packet should match dress regulations, double check the regulations " + 
           "<a href='http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57252'>here</a>.<br><br>" + 
           "Note that students should not bring cell phones, purses, or valuables to the graduation ceremony. Water bottles will be provided.<br><br>" + 
           "Note that graduates will get their diplomas after the ceremony. Graduates will return to the track on the visitor's side in front of the bleachers " + 
           "after the ceremony to the alphabetically marked tables. Diplomas will be handed out when the mortar board (cap) with name label is presented.<br><br>" +
           "Graduation photos will be provided by Studio One Photography. Students will receive order forms, or they can place orders and view photos online at " +
           "<a href='http://www.s1portal.com/foothill.html'>this website</a>.",
       moreInfoLink: "http://www.foothillfalcons.org/apps/pages/index.jsp?uREC_ID=45121&type=d&pREC_ID=57252",
       formsNumbers: []
   },
   {
       name: "Disneyland Grad Night Trip", month: 6, date: 10, year: 2016, link: "grad-night-trip",
       description: "This will be a two-day trip from 6/10 to 6/12. <br><br>See the <a href='../grad-night/'>Grad Nite page</a> for more information.",
       fullDescription: "This will be a two-day trip from 6/10 to 6/12. <br><br>See the <a href='../grad-night/'>Grad Nite page</a> for more information.",
       moreInfoLink: "",
       formsNumbers: [6]
   }

];

var valid_indexes = []; //This will store the indexes in the events array that occur from 0 <= timeLeft <= millisecond_count 


for (var i = 0; i < events.length; i++) //This assumes the events are ordered correctly by date
{
    var event_time = new Date(events[i].year, events[i].month - 1, events[i].date); //month parameter from 0-11; date and year parameters 
                                                                                    //start at 1
    var timeLeft = (event_time.valueOf() - timeNow.valueOf());
    if (timeLeft >= 0 && timeLeft <= millisecond_count || (events[i].month - 1 == timeNow.getMonth() && events[i].date == 0)) {
        valid_indexes.push(i);
    }
}

var eventsEle = document.getElementById("important-events");

if (eventsEle) //this will only be true if the user is on the home page
{
    eventsEle.innerHTML = "";

    for (var i = 0; i < valid_indexes.length; i++)
        //Source for this section: http://stackoverflow.com/questions/19494339/creating-dynamic-div-using-javascript 
    {
        var tempDiv = document.createElement("div");
        var tempHeader = document.createElement("h4");
        var tempLink = document.createElement("a");

        var tempEvent = events[valid_indexes[i]];


        tempDiv.setAttribute("class", "well well-sm");
        tempLink.href = "events/#" + tempEvent.link;
        if (tempEvent.date == 0)
            tempLink.innerHTML = month_names[tempEvent.month - 1] + ": " + tempEvent.name;
        else
            tempLink.innerHTML = month_names[tempEvent.month - 1] + " " + tempEvent.date + ": " + tempEvent.name;

        tempHeader.appendChild(tempLink);
        tempDiv.appendChild(tempHeader);

        if (tempEvent.description || tempEvent.formsNumbers.length != 0) {
            var tempDescription = document.createElement("blockquote");
            tempDescription.innerHTML = "";
            if (tempEvent.description) {
                tempDescription.innerHTML = tempEvent.description;
            }
            if (tempEvent.formsNumbers.length != 0) {
                var formLink = document.createElement("a");
                formLink.href = "forms";
                formLink.innerHTML = "Forms page";
                if (tempDescription.innerHTML)
                    tempDescription.innerHTML += "<br>";

                if (tempEvent.formsNumbers.length == 1)
                    tempDescription.appendChild(document.createTextNode("Download form #" + tempEvent.formsNumbers[0] + " on the "));
                else if (tempEvent.formsNumbers.length == 2)
                    tempDescription.appendChild(document.createTextNode("Download forms #" + tempEvent.formsNumbers[0] + " and " +
                        tempEvent.formsNumbers[1] + " on the "));
                else {
                    var temp_formString = "Download forms #";
                    var counter = 0;
                    while (counter < tempEvent.formsNumbers.length - 1) {
                        temp_formString += tempEvent.formsNumbers[counter++];
                        temp_formString += ", ";
                    }
                    temp_formString += " and " + tempEvent.formsNumbers[tempEvent.formsNumbers.length - 1] + " on the ";

                    tempDescription.appendChild(document.createTextNode(temp_formString));
                }

                tempDescription.appendChild(formLink);
                tempDescription.appendChild(document.createTextNode("."));
            }
            tempDiv.appendChild(tempDescription);
        }

        eventsEle.appendChild(tempDiv);
    }

    ///*
    var adEle = document.getElementById("advertisements");
    var infoEle = document.getElementById("important-info");
    if (!adEle.innerHTML)
    {
        infoEle.style.maxHeight = "64vh";
    }
    //*/
}

var eventsIndex = 0; //current index of event counter
//var monthNum = 7; //August = 8th month (if I can count correctly) --> convert to array index by subtracting 1
var monthEle = document.getElementById("august");

if (monthEle) //this will only be true if the user is on the events page
{
    for (var i = 7; i <= 17; i++) //7 = august, 17%12 = 5 = june in index notation
    {
        monthEle = document.getElementById(month_names[i % 12].toLowerCase());
        monthEle.innerHTML = "";

        var divHeader = document.createElement("div");
        var header = document.createElement("h3");
        var divBody = document.createElement("div");
        var pToTop = document.createElement("p");
        var pToTopLink = document.createElement("a");

        divHeader.setAttribute("class", "panel-heading");
        header.setAttribute("class", "panel-title");
        header.innerHTML = month_names[i % 12];
        divHeader.appendChild(header);


        //if (i % 2 == 0)
        //    divHeader.style.backgroundColor = "#fbca32";

        divBody.setAttribute("class", "panel-body");
        var monthCounter = 0;
        while (eventsIndex < events.length && events[eventsIndex].month == (i%12) + 1) {
            var tempEvent = events[eventsIndex];
            var divEvent = document.createElement("div");
            var event_title = document.createElement("h4");

            divEvent.setAttribute("class", "well well-sm");
            divEvent.setAttribute("id", tempEvent.link);

            if (i % 2 === 0) {
                event_title.style.backgroundColor = "#fbca32";
                event_title.style.color = "black";
            }
            //event.style.fontSize = "2em";

            if (tempEvent.date == 0)
                event_title.innerHTML = month_names[tempEvent.month - 1] + ": " + tempEvent.name;
            else
                event_title.innerHTML = month_names[tempEvent.month - 1] + " " + tempEvent.date + ": " + tempEvent.name;



            divEvent.appendChild(event_title);

            if (tempEvent.fullDescription || tempEvent.moreInfoLink || tempEvent.formsNumbers.length != 0) {
                var event_description = document.createElement("blockquote");
                event_description.innerHTML = "";
                if (tempEvent.fullDescription) {
                    event_description.innerHTML = tempEvent.fullDescription;
                }
                if (tempEvent.moreInfoLink) {
                    var event_link = document.createElement("a");
                    event_link.href = tempEvent.moreInfoLink;
                    event_link.setAttribute("target", "_blank");
                    event_link.innerHTML = "here";
                    event_description.innerHTML += "<br><br>";
                    event_description.appendChild(document.createTextNode("More information "));
                    event_description.appendChild(event_link);
                    event_description.appendChild(document.createTextNode("."));
                }
                if (tempEvent.formsNumbers.length != 0) {
                    var form_link = document.createElement("a");
                    form_link.href = "../forms";
                    form_link.innerHTML = "Forms page";
                    if (tempEvent.moreInfoLink)
                        event_description.innerHTML += "<br>";
                    else
                        event_description.innerHTML += "<br><br>";
                    if (tempEvent.formsNumbers.length == 1)
                        event_description.appendChild(document.createTextNode("Download form #" + tempEvent.formsNumbers[0] + " on the "));
                    else if (tempEvent.formsNumbers.length == 2)
                        event_description.appendChild(document.createTextNode("Download forms #" + tempEvent.formsNumbers[0] + " and " +
                            tempEvent.formsNumbers[1] + " on the "));
                    else
                    {
                        var temp_formString = "Download forms #";
                        var counter = 0;
                        while (counter < tempEvent.formsNumbers.length - 1) {
                            temp_formString += tempEvent.formsNumbers[counter++];
                            temp_formString += ", ";
                        }
                        temp_formString += " and " + tempEvent.formsNumbers[tempEvent.formsNumbers.length - 1] + " on the ";

                        event_description.appendChild(document.createTextNode(temp_formString));
                    }
                    
                    event_description.appendChild(form_link);
                    event_description.appendChild(document.createTextNode("."));
                }
                divEvent.appendChild(event_description);

            }


            divBody.appendChild(divEvent);

            monthCounter++;
            eventsIndex++;
        }
        if (monthCounter == 0)
        {
            var tempMessage = document.createElement("p");
            tempMessage.innerHTML = "No events currently registered for this month.";
            tempMessage.style.fontSize = "1.25em";
            tempMessage.style.fontStyle = "italic";
            divBody.appendChild(tempMessage);
        }

        pToTop.setAttribute("class", "back-to-top-link");
        //pToTopLink.href = "#top";
        pToTopLink.href = "";
        pToTopLink.innerHTML = "Back to top";
        pToTop.appendChild(pToTopLink);
        divBody.appendChild(pToTop);

        monthEle.appendChild(divHeader);
        monthEle.appendChild(divBody);
    }

}