
from vital_ai_vitalsigns.model.properties.BooleanProperty import BooleanProperty
from vital_ai_vitalsigns.model.properties.DateTimeProperty import DateTimeProperty
from vital_ai_vitalsigns.model.properties.DoubleProperty import DoubleProperty
from vital_ai_vitalsigns.model.properties.FloatProperty import FloatProperty
from vital_ai_vitalsigns.model.properties.GeoLocationProperty import GeoLocationProperty
from vital_ai_vitalsigns.model.properties.IntegerProperty import IntegerProperty
from vital_ai_vitalsigns.model.properties.LongProperty import LongProperty
from vital_ai_vitalsigns.model.properties.OtherProperty import OtherProperty
from vital_ai_vitalsigns.model.properties.StringProperty import StringProperty
from vital_ai_vitalsigns.model.properties.TruthProperty import TruthProperty
from vital_ai_vitalsigns.model.properties.URIProperty import URIProperty
from vital_ai_vitalsigns.model.VITAL_Node import VITAL_Node


class HaleyAccountOfficeLocation(VITAL_Node):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCity', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCountry', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCounty', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressLine1', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressLine2', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressPostalCode', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressProvince', 'prop_class': StringProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasOfficeLocationAddressState', 'prop_class': StringProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + HaleyAccountOfficeLocation._allowed_properties
