import mysql.connector
from gpiozero import LED
import drivers
from time import sleep

mydb = mysql.connector.connect(
  host="192.168.199.29",
  user="root",
  password="hai123456",
  database="traffic_lights"
)
mydb.autocommit = True
mycursor = mydb.cursor()

display = drivers.Lcd()

R1 = LED(17)
Y1 = LED(27)
G1 = LED(22)

R2 = LED(18)
Y2 = LED(23)
G2 = LED(24)  

R3 = LED(13)
Y3 = LED(19)
G3 = LED(26)

display.lcd_clear()

while(1):
      sleep(1)
      mycursor.execute("SELECT * FROM Table2_Realtime;")
      myresult = mycursor.fetchall()
      den1 = myresult[0][1]
      den2 = myresult[1][1]
      den3 = myresult[2][1]

      #den1
      if (den1 == "R"):
            R1.on()
            Y1.off()
            G1.off()
      elif (den1 == "Y"):
            R1.off()
            Y1.on()
            G1.off()
      else:
            R1.off()
            Y1.off()
            G1.on()
      #den2
      if (den2 == "R"):
            R2.on()
            Y2.off()
            G2.off()
      elif (den2 == "Y"):
            R2.off()
            Y2.on()
            G2.off()
      else:   
            R2.off()
            Y2.off()
            G2.on()
      
      #den3            
      if (den3 == "R"):
            R3.on()
            Y3.off()
            G3.off()
      elif (den3 == "Y"):
            R3.off()
            Y3.on()
            G3.off()
      else:   
            R3.off()
            Y3.off()
            G3.on()

      if (myresult[0][2] != None):
          display.lcd_display_string(str( "  " + str('{0:03}'.format(myresult[0][2])) + "  " + str('{0:03}'.format(myresult[1][2])) + "  " + str('{0:03}'.format(myresult[2][2]))), 1)
          display.lcd_display_string(str( "   " + den1 + "    " + den2 + "    " + den3), 2)
      else:
            display.lcd_display_string("               ", 1)
            display.lcd_display_string(str( "   " + den1 + "    " + den2 + "    " + den3), 2)
