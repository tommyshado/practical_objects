# ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

# If the function is passed a valid PIN string, return true, else return false.

def validate_pin(pin):
    # parentesis 
    if pin.isdigit() and (len(pin) == 4 or len(pin) == 6):
        return True
    return False