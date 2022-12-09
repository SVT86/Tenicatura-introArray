CC = g++

introPos.exe :	introPos.o
				${CC} introPos.o -o introPos.exe
introPos.o:		introPos.c
				${CC} -c introPos.c -o introPos.o
clean:
				rem *.o *.exe