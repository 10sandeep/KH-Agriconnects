import React, { useState } from 'react';

interface FormProps {
  onSubmit: (data: any) => void;
}

const AgricultureServicesEnrollment: React.FC<FormProps> = ({ onSubmit }) => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState<any>({});

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
    setFormData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let finalValue = value;
    
    if (type === 'checkbox') {
      finalValue = (e.target as HTMLInputElement).checked;
    }

    setFormData({
      ...formData,
      [name]: finalValue
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      serviceType: selectedService,
      ...formData
    });
  };

  return (
    <div  id="serviceEnrollment" className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-green-700 mb-6 mt-5">Agricultural Services Enrollment</h1>
      
      <div className="mb-6">
        <label htmlFor="serviceType" className="block text-lg font-medium mb-2">
          Select Service Type:
        </label>
        <select
          id="serviceType"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedService}
          onChange={handleServiceChange}
          required
        >
          <option value="">-- Select a Service --</option>
          <option value="hiring">1. Custom Hiring Services of Agricultural Machinery</option>
          <option value="contract">2. Contract Farming (Min. 25 Acres)</option>
          <option value="training">3. Training in Present and Futuristic Agri-Tech</option>
          <option value="consultancy">4. Consultancy Services for Agricultural Machinery</option>
          <option value="design">5. Custom Equipment Design & Development</option>
          <option value="marketplace">6. Buyer & Seller Sourcing Gateway</option>
          <option value="export">7. Export of Agricultural Commodities</option>
        </select>
      </div>

      {selectedService && (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Custom Hiring Services of Agricultural Machinery */}
          {selectedService === 'hiring' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Custom Hiring Services of Agricultural Machinery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="equipmentType" className="block font-medium mb-1">Type of Equipment Required</label>
                  <select
                    id="equipmentType"
                    name="equipmentType"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Equipment --</option>
                    <option value="cultivator">Cultivator</option>
                    <option value="transplanter">Transplanter</option>
                    <option value="harvester">Harvester</option>
                    <option value="drone">Drone</option>
                    <option value="tractor">Tractor</option>
                    <option value="seeder">Seeder</option>
                    <option value="sprayer">Sprayer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="cropType" className="block font-medium mb-1">Crop Type</label>
                  <input
                    type="text"
                    id="cropType"
                    name="cropType"
                    placeholder="e.g., paddy, maize, cotton"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="areaOfOperation" className="block font-medium mb-1">Area of Operation</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="areaOfOperation"
                      name="areaOfOperation"
                      min="0"
                      step="0.01"
                      className="w-3/4 p-2 border border-gray-300 rounded-l"
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      id="areaUnit"
                      name="areaUnit"
                      className="w-1/4 p-2 border border-gray-300 rounded-r border-l-0"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="acres">acres</option>
                      <option value="hectares">hectares</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="dateNeeded" className="block font-medium mb-1">Date Equipment Needed</label>
                  <input
                    type="date"
                    id="dateNeeded"
                    name="dateNeeded"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="durationOfUse" className="block font-medium mb-1">Duration of Use</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="durationOfUse"
                      name="durationOfUse"
                      min="1"
                      className="w-3/4 p-2 border border-gray-300 rounded-l"
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      id="durationUnit"
                      name="durationUnit"
                      className="w-1/4 p-2 border border-gray-300 rounded-r border-l-0"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="days">days</option>
                      <option value="hours">hours</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block font-medium mb-1">Do you need an operator?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="needOperator"
                        value="yes"
                        className="mr-1"
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="needOperator"
                        value="no"
                        className="mr-1"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="landType" className="block font-medium mb-1">Type of Land</label>
                  <select
                    id="landType"
                    name="landType"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Land Type --</option>
                    <option value="plain">Plain</option>
                    <option value="hilly">Hilly</option>
                    <option value="wet">Wet</option>
                    <option value="sandy">Sandy</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="landCondition" className="block font-medium mb-1">Land Condition</label>
                  <select
                    id="landCondition"
                    name="landCondition"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Land Condition --</option>
                    <option value="cultivable">Cultivable</option>
                    <option value="barren">Barren</option>
                    <option value="ploughed">Recently Ploughed</option>
                    <option value="needsPloughing">Needs Ploughing</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="additionalSupport" className="block font-medium mb-1">Any additional support required?</label>
                <textarea
                  id="additionalSupport"
                  name="additionalSupport"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          )}

          {/* Contract Farming */}
          {selectedService === 'contract' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Contract Farming (Min. 25 Acres)</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="landOwnershipType" className="block font-medium mb-1">Land Ownership Type</label>
                  <select
                    id="landOwnershipType"
                    name="landOwnershipType"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Ownership Type --</option>
                    <option value="owned">Owned</option>
                    <option value="leased">Leased</option>
                    <option value="inherited">Inherited</option>
                    <option value="community">Community</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="totalLandArea" className="block font-medium mb-1">Total Land Area (acres)</label>
                  <input
                    type="number"
                    id="totalLandArea"
                    name="totalLandArea"
                    min="0"
                    step="0.01"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="availableLand" className="block font-medium mb-1">Available Land for Contract Farming (acres)</label>
                  <input
                    type="number"
                    id="availableLand"
                    name="availableLand"
                    min="25"
                    step="0.01"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                  <small className="text-red-600">Minimum 25 acres required</small>
                </div>
                
                <div>
                  <label htmlFor="currentCrop" className="block font-medium mb-1">Current Crop or Usage</label>
                  <input
                    type="text"
                    id="currentCrop"
                    name="currentCrop"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="waterSource" className="block font-medium mb-1">Water Source Availability</label>
                  <select
                    id="waterSource"
                    name="waterSource"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Water Source --</option>
                    <option value="borewell">Borewell</option>
                    <option value="canal">Canal</option>
                    <option value="rainfed">Rainfed</option>
                    <option value="drip">Drip Irrigation</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="soilType" className="block font-medium mb-1">Soil Type</label>
                  <select
                    id="soilType"
                    name="soilType"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Soil Type --</option>
                    <option value="red">Red</option>
                    <option value="black">Black</option>
                    <option value="alluvial">Alluvial</option>
                    <option value="sandy">Sandy</option>
                    <option value="clayey">Clayey</option>
                    <option value="loamy">Loamy</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="interestedCrops" className="block font-medium mb-1">Interested Crops for Cultivation</label>
                  <input
                    type="text"
                    id="interestedCrops"
                    name="interestedCrops"
                    placeholder="e.g., wheat, soybean, sugarcane"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="contractDuration" className="block font-medium mb-1">Expected Duration of Contract</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="contractDuration"
                      name="contractDuration"
                      min="1"
                      className="w-3/4 p-2 border border-gray-300 rounded-l"
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      id="contractDurationUnit"
                      name="contractDurationUnit"
                      className="w-1/4 p-2 border border-gray-300 rounded-r border-l-0"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="months">Months</option>
                      <option value="years">Years</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block font-medium mb-1">Are you open to mechanized farming?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="openToMechanized"
                        value="yes"
                        className="mr-1"
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="openToMechanized"
                        value="no"
                        className="mr-1"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="specialNotes" className="block font-medium mb-1">Special Notes or Requests</label>
                <textarea
                  id="specialNotes"
                  name="specialNotes"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          )}

          {/* Training in Present and Futuristic Agri-Tech */}
          {selectedService === 'training' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Training in Present and Futuristic Agri-Tech</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="age" className="block font-medium mb-1">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    min="18"
                    max="100"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="gender" className="block font-medium mb-1">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Gender --</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="preferNotToSay">Prefer not to say</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="educationLevel" className="block font-medium mb-1">Education Level</label>
                  <select
                    id="educationLevel"
                    name="educationLevel"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Education Level --</option>
                    <option value="noFormal">No formal education</option>
                    <option value="school">School</option>
                    <option value="iti">ITI</option>
                    <option value="diploma">Diploma</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Post Graduate</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="trainingArea" className="block font-medium mb-1">Interested Area of Training</label>
                  <select
                    id="trainingArea"
                    name="trainingArea"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Training Area --</option>
                    <option value="smartFarming">Smart Farming</option>
                    <option value="droneOperation">Drone Operation</option>
                    <option value="machineryHandling">Farm Machinery Handling</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="iotAgriculture">IoT in Agriculture</option>
                    <option value="precisionFarming">Precision Farming</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="availability" className="block font-medium mb-1">Availability</label>
                  <select
                    id="availability"
                    name="availability"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Availability --</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="preferredLocation" className="block font-medium mb-1">Preferred Training Location</label>
                  <input
                    type="text"
                    id="preferredLocation"
                    name="preferredLocation"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1">Are you seeking certification?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="seekingCertification"
                        value="yes"
                        className="mr-1"
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="seekingCertification"
                        value="no"
                        className="mr-1"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Consultancy Services */}
          {selectedService === 'consultancy' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Consultancy Services for Agricultural Machinery</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="currentMachinery" className="block font-medium mb-1">Current Machinery Owned (optional)</label>
                  <textarea
                    id="currentMachinery"
                    name="currentMachinery"
                    rows={2}
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="cropGrownPlanned" className="block font-medium mb-1">Crop Grown / Planned</label>
                  <input
                    type="text"
                    id="cropGrownPlanned"
                    name="cropGrownPlanned"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="landSizeType" className="block font-medium mb-1">Land Size and Type</label>
                  <input
                    type="text"
                    id="landSizeType"
                    name="landSizeType"
                    placeholder="e.g., 50 acres, flat terrain"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="machineryBudget" className="block font-medium mb-1">Budget for New Machinery (INR)</label>
                  <input
                    type="number"
                    id="machineryBudget"
                    name="machineryBudget"
                    min="0"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="equipmentType" className="block font-medium mb-1">Looking for New / Used Equipment?</label>
                  <select
                    id="equipmentType"
                    name="equipmentType"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Equipment Type --</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="roiPeriod" className="block font-medium mb-1">Expected ROI Period (in months)</label>
                  <input
                    type="number"
                    id="roiPeriod"
                    name="roiPeriod"
                    min="1"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="challengesFaced" className="block font-medium mb-1">Challenges Faced (Optional)</label>
                <textarea
                  id="challengesFaced"
                  name="challengesFaced"
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
          )}

          {/* Custom Equipment Design & Development */}
          {selectedService === 'design' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Custom Equipment Design & Development</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="problemStatement" className="block font-medium mb-1">Problem Statement or Machinery Need</label>
                  <textarea
                    id="problemStatement"
                    name="problemStatement"
                    rows={3}
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="designCropType" className="block font-medium mb-1">Crop Type</label>
                  <input
                    type="text"
                    id="designCropType"
                    name="designCropType"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="currentMethod" className="block font-medium mb-1">Current Method of Operation</label>
                  <input
                    type="text"
                    id="currentMethod"
                    name="currentMethod"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="machineFunction" className="block font-medium mb-1">Machine Function Needed</label>
                  <input
                    type="text"
                    id="machineFunction"
                    name="machineFunction"
                    placeholder="e.g., weeding, sowing, harvesting"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="designLandConditions" className="block font-medium mb-1">Land Conditions</label>
                  <input
                    type="text"
                    id="designLandConditions"
                    name="designLandConditions"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="powerSource" className="block font-medium mb-1">Power Source Available</label>
                  <select
                    id="powerSource"
                    name="powerSource"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Power Source --</option>
                    <option value="electric">Electric</option>
                    <option value="diesel">Diesel</option>
                    <option value="pto">PTO</option>
                    <option value="battery">Battery</option>
                    <option value="manual">Manual</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="designBudget" className="block font-medium mb-1">Budget Range (INR)</label>
                  <input
                    type="text"
                    id="designBudget"
                    name="designBudget"
                    placeholder="e.g., 50,000-1,00,000"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="solutionDeadline" className="block font-medium mb-1">Deadline for Solution (if any)</label>
                  <input
                    type="date"
                    id="solutionDeadline"
                    name="solutionDeadline"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Buyer & Seller Sourcing Gateway */}
          {selectedService === 'marketplace' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Buyer & Seller Sourcing Gateway</h2>
              
              <div className="mb-4">
                <label className="block font-medium mb-1">Choose Role:</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="marketplaceRole"
                      value="buyer"
                      className="mr-1"
                      onChange={handleInputChange}
                      required
                    />
                    Buyer
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="marketplaceRole"
                      value="seller"
                      className="mr-1"
                      onChange={handleInputChange}
                    />
                    Seller
                  </label>
                </div>
              </div>
              
              {formData.marketplaceRole === 'seller' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="productType" className="block font-medium mb-1">Product Type</label>
                    <input
                      type="text"
                      id="productType"
                      name="productType"
                      placeholder="Grain, Fruit, Vegetable, Equipment, etc."
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="quantityAvailable" className="block font-medium mb-1">Quantity Available</label>
                    <input
                      type="text"
                      id="quantityAvailable"
                      name="quantityAvailable"
                      placeholder="e.g., 500 kg, 10 MT"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="expectedPrice" className="block font-medium mb-1">Expected Price (INR/unit)</label>
                    <input
                      type="number"
                      id="expectedPrice"
                      name="expectedPrice"
                      min="0"
                      step="0.01"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="readyForDispatch" className="block font-medium mb-1">Ready for Dispatch Date</label>
                    <input
                      type="date"
                      id="readyForDispatch"
                      name="readyForDispatch"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="certifications" className="block font-medium mb-1">Any Certifications</label>
                    <input
                      type="text"
                      id="certifications"
                      name="certifications"
                      placeholder="e.g., Organic, FPO"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredDeliveryTimeline" className="block font-medium mb-1">Preferred Delivery Timeline</label>
                    <input
                      type="text"
                      id="preferredDeliveryTimeline"
                      name="preferredDeliveryTimeline"
                      placeholder="e.g., Within 1 week"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
              
              {formData.marketplaceRole === 'buyer' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="buyerProductType" className="block font-medium mb-1">Product Type Looking For</label>
                    <input
                      type="text"
                      id="buyerProductType"
                      name="buyerProductType"
                      placeholder="Grain, Fruit, Vegetable, Equipment, etc."
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="quantityRequired" className="block font-medium mb-1">Quantity Required</label>
                    <input
                      type="text"
                      id="quantityRequired"
                      name="quantityRequired"
                      placeholder="e.g., 500 kg, 10 MT"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="buyerBudget" className="block font-medium mb-1">Budget (INR/unit)</label>
                    <input
                      type="number"
                      id="buyerBudget"
                      name="buyerBudget"
                      min="0"
                      step="0.01"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="requiredBy" className="block font-medium mb-1">Required By (Date)</label>
                    <input
                      type="date"
                      id="requiredBy"
                      name="requiredBy"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="qualityRequirements" className="block font-medium mb-1">Quality Requirements</label>
                    <input
                      type="text"
                      id="qualityRequirements"
                      name="qualityRequirements"
                      placeholder="e.g., Grade A, Organic certified"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="deliveryLocation" className="block font-medium mb-1">Delivery Location</label>
                    <input
                      type="text"
                      id="deliveryLocation"
                      name="deliveryLocation"
                      placeholder="e.g., District, State"
                      className="w-full p-2 border border-gray-300 rounded"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Export of Agricultural Commodities */}
          {selectedService === 'export' && (
            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Export of Agricultural Commodities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="commodityName" className="block font-medium mb-1">Commodity Name</label>
                  <input
                    type="text"
                    id="commodityName"
                    name="commodityName"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="exportQuantity" className="block font-medium mb-1">Quantity Available</label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="exportQuantity"
                      name="exportQuantity"
                      min="0"
                      className="w-3/4 p-2 border border-gray-300 rounded-l"
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      id="exportQuantityUnit"
                      name="exportQuantityUnit"
                      className="w-1/4 p-2 border border-gray-300 rounded-r border-l-0"
                      onChange={handleInputChange}
                      required
                    >
                      <option value="kg">Kg</option>
                      <option value="mt">MT</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="harvestStatus" className="block font-medium mb-1">Harvested or In-Field</label>
                  <select
                    id="harvestStatus"
                    name="harvestStatus"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Status --</option>
                    <option value="harvested">Harvested</option>
                    <option value="inField">In-Field</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-medium mb-1">Packaging Available</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="packagingAvailable"
                        value="yes"
                        className="mr-1"
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="packagingAvailable"
                        value="no"
                        className="mr-1"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="exportCertifications" className="block font-medium mb-1">Certifications Available</label>
                  <select
                    id="exportCertifications"
                    name="exportCertifications"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-- Select Certification --</option>
                    <option value="apeda">APEDA</option>
                    <option value="organic">Organic</option>
                    <option value="fssai">FSSAI</option>
                    <option value="none">None</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="exportPrice" className="block font-medium mb-1">Expected Price (INR/kg)</label>
                  <input
                    type="number"
                    id="exportPrice"
                    name="exportPrice"
                    min="0"
                    step="0.01"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block font-medium mb-1">Previous Export Experience?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="exportExperience"
                        value="yes"
                        className="mr-1"
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="exportExperience"
                        value="no"
                        className="mr-1"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block font-medium mb-1">Ready for Quality Inspection?</label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="qualityInspection"
                        value="yes"
                        className="mr-1"
                        onChange={handleInputChange}
                        required
                      />
                      Yes
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="qualityInspection"
                        value="no"
                        className="mr-1"
                        onChange={handleInputChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Common Fields for All Services */}
          <div className="p-4 border border-green-200 rounded-lg bg-green-50 mt-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block font-medium mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full p-2 border border-gray-300 rounded"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AgricultureServicesEnrollment;
                