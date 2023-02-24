import React from "react"

const ApplyForm = (props) => (
    <form name="Apply" method="POST" netlify-honeypot="bot-field" action="/thank-you/" data-netlify="true">
        <input type="hidden" name="form-name" value="Apply" aria-label="Input" />
        <p class="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" aria-label="Input" /></label>
        </p>
        <p class="full-row">
            <label htmlFor="location">Which location are you interested in?* 
            <select name="location" required>
                <option value="alabama">Alabama</option>
                <option value="texas">Texas</option>
                <option value="south-carolina">South Carolina</option>
                <option value="oklahoma">Oklahoma</option>
                <option value="other">Other</option>
            </select>
            </label>   
        </p>
        <p class="full-row">
            <label htmlFor="name">Full Name* <input type="text" name="name" aria-label="Input" required/></label>   
        </p>
        <p class="full-row">
            <label htmlFor="address">Street Address* <input type="text" name="address" aria-label="Input" required/></label>
        </p>
        <p class="one-third">
            <label htmlFor="city">City* <input type="text" name="city" aria-label="Input" required/></label>   
        </p>
        <p class="one-third">
            <label htmlFor="state">State* <input type="text" name="state" aria-label="Input" required/></label>   
        </p>
        <p class="one-third last">
            <label htmlFor="zip">Zip* <input type="text" name="zip" aria-label="Input" required/></label>   
        </p>
        <p class="one-half">
            <label htmlFor="email">Email Address* <input type="email" name="email" aria-label="Input" required/></label>   
        </p>
        <p  class="one-half last">
            <label htmlFor="phone">Phone* <input type="text" name="phone" aria-label="Input" required/></label>   
        </p>
        <p class="full-row">
            <label  htmlFor="hear-about">
              How did you hear about us?*
              <select name="hear-about" required>
                <option value="">Select Option</option>
                <option value="Website">Website</option>
                <option value="Job fair">Job fair</option>
                <option value="Local event">Local event</option>
                <option value="Educational institution">Educational institution</option>
                <option value="Job board">Job board</option>
                <option value="Social media">Social media</option>
                <option value="Referral from friend or family">Referral from friend or family</option>
                <option value="Other">Other</option>
              </select>
            </label>
        </p>
        <p class="full-row">
            <label htmlFor="your-message">In 140 characters or less, please describe why you would be a good fit for this job
                <textarea name="your-message" cols="40" rows="10" maxLength="140" minLength="0" aria-label="Input"/>
            </label>   
        </p>
        <div class="optional">
            <p>Optional</p>
        </div>
        <p class="full-row">
            <label htmlFor="linkedin">LinkedIn Profile Url <input type="text" name="linkedin" aria-label="Input" /></label>   
        </p>
        <div class="checkbox-row">
            <p><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label for="vehicle2"> I have a car</label><br/>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label><br/></p>
        </div>
        <p class="two-thirds">
            <label htmlFor="resume">Upload Resume <input type="file" name="resume" size="40" accept=".pdf,.doc,.docx" aria-label="Input" /></label>   
        </p>
        <p class={"button"}>
            <button type="submit" name="submit" class={"submit"}  aria-label="Send">Submit</button>
        </p>
    </form>
)

export default ApplyForm