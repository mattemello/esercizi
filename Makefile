
all: bin/ordered_array bin/ordered_array_tests

clean:
	rm -f build/* bin/*

tests: bin/ordered_array_tests

use_case: bin/ordered_array

CFLAGS = -g -Wall -Wextra -Wpedantic -Wconversion

INCLUDES = src/*.h

COMMON_DEPS = $(INCLUDES) Makefile

build/%.o: src/%.c $(COMMON_DEPS)
	$(CC) $(CFLAGS) -c $< -o $@

bin/ordered_array: build/ordered_array.o build/ordered_array_main.o $(COMMON_DEPS)
	$(CC) -o bin/ordered_array build/ordered_array.o build/ordered_array_main.o

bin/ordered_array_tests: build/ordered_array_tests.o build/ordered_array.o build/unity.o $(COMMON_DEPS)
	$(CC) -o bin/ordered_array_tests  build/ordered_array_tests.o build/ordered_array.o build/unity.o


