# loan amount
# apr
# loan duration

def monthly_interest_rate(apr_decimal)
  apr_decimal / 12.0
end

def loan_duration_in_months(loan_duration_in_years)
  loan_duration_in_years / 12.0
end

def payment(loan_amt, apr_decimal, loan_duration_in_months)
  c = monthly_interest_rate(apr_decimal)
  n = loan_duration_in_months(loan_duration_in_months)
  numerator = loan_amt * c * ((1 + c)**n)
  denominator = (1 + c)**n - 1
  (numerator / denominator).round(2)
end

def valid_number?(num)
  num.to_i() != 0
end

def prompt(message)
  puts "=> #{message}"
end

loop do
  loan_amt = ''
  loop do
    prompt "What is the loan amount?"
    loan_amt = gets.chomp
    if valid_number?(loan_amt)
      loan_amt = loan_amt.to_f
      break
    else
      prompt "Not a valid loan amount."
    end
  end

  apr_decimal = ''
  loop do
    prompt "What is your annual interest rate? on the loan (in percent)?"
    apr_decimal = gets.chomp
    if valid_number?(apr_decimal)
      apr_decimal = apr_decimal.to_f / 100
      break
    else
      prompt "Not a valid annual interest rate."
    end
  end

  loan_duration_in_months = ''
  loop do
    prompt "What is the loan duration in years?"
    loan_duration_in_years = gets.chomp
    if valid_number?(loan_duration_in_years)
      loan_duration_in_months = loan_duration_in_months(loan_duration_in_years.to_f)
      break
    else
      prompt "Not a valid number of years."
    end
  end

  prompt "Your monthly payment is:"

  prompt payment(loan_amt, apr_decimal, loan_duration_in_months)

  prompt "Another calculation?"

  continue = gets.chomp

  break unless continue.downcase.start_with?('y')
end

prompt "Thank you for using the calculator!"
